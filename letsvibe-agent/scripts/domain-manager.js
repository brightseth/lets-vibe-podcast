#!/usr/bin/env node
/**
 * Domain Manager - name.com API integration
 *
 * Usage:
 *   node scripts/domain-manager.js check letsvibe.fm
 *   node scripts/domain-manager.js buy letsvibe.fm
 *   node scripts/domain-manager.js list
 *   node scripts/domain-manager.js dns letsvibe.fm
 */

import 'dotenv/config';

const USERNAME = process.env.NAMECOM_USERNAME;
const TOKEN = process.env.NAMECOM_API_TOKEN;
const API_BASE = 'https://api.name.com/v4';

if (!USERNAME || !TOKEN) {
  console.error('Missing NAMECOM_USERNAME or NAMECOM_API_TOKEN in .env');
  process.exit(1);
}

const auth = Buffer.from(`${USERNAME}:${TOKEN}`).toString('base64');

async function apiCall(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${JSON.stringify(data)}`);
  }

  return data;
}

/**
 * Check domain availability
 */
async function checkDomain(domain) {
  console.log(`\n🔍 Checking availability: ${domain}\n`);

  try {
    const result = await apiCall(`/domains:checkAvailability`, 'POST', {
      domainNames: [domain]
    });

    const info = result.results?.[0];
    if (info) {
      console.log(`Domain: ${info.domainName}`);
      console.log(`Available: ${info.purchasable ? '✅ YES' : '❌ NO'}`);
      if (info.purchasePrice) {
        console.log(`Price: $${(info.purchasePrice / 100).toFixed(2)}/year`);
      }
      if (info.renewalPrice) {
        console.log(`Renewal: $${(info.renewalPrice / 100).toFixed(2)}/year`);
      }
      return info;
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

/**
 * Purchase domain
 */
async function buyDomain(domain, years = 1) {
  console.log(`\n💰 Purchasing: ${domain} for ${years} year(s)\n`);

  // First check availability
  const availability = await checkDomain(domain);
  if (!availability?.purchasable) {
    console.error('Domain is not available for purchase');
    return;
  }

  console.log(`\nProceeding with purchase...`);

  try {
    const result = await apiCall('/domains', 'POST', {
      domain: {
        domainName: domain,
        years: years
      }
    });

    console.log('\n✅ Domain purchased successfully!');
    console.log(`Domain: ${result.domain?.domainName}`);
    console.log(`Expires: ${result.domain?.expireDate}`);
    return result;
  } catch (error) {
    console.error('Purchase error:', error.message);
  }
}

/**
 * List owned domains
 */
async function listDomains() {
  console.log('\n📋 Your domains:\n');

  try {
    const result = await apiCall('/domains');

    if (result.domains && result.domains.length > 0) {
      for (const domain of result.domains) {
        console.log(`• ${domain.domainName}`);
        console.log(`  Expires: ${domain.expireDate}`);
        console.log(`  Auto-renew: ${domain.autorenewEnabled ? 'Yes' : 'No'}`);
        console.log('');
      }
    } else {
      console.log('No domains found.');
    }
    return result.domains;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

/**
 * Get/Set DNS records
 */
async function manageDNS(domain, action = 'get', records = null) {
  console.log(`\n🌐 DNS for ${domain}:\n`);

  try {
    if (action === 'get') {
      const result = await apiCall(`/domains/${domain}/records`);

      if (result.records && result.records.length > 0) {
        for (const record of result.records) {
          console.log(`${record.type.padEnd(6)} ${record.host.padEnd(20)} → ${record.answer}`);
        }
      } else {
        console.log('No DNS records found.');
      }
      return result.records;
    }

    if (action === 'vercel') {
      // Set up DNS for Vercel
      console.log('Setting up Vercel DNS...\n');

      // A record for apex domain
      await apiCall(`/domains/${domain}/records`, 'POST', {
        host: '',
        type: 'A',
        answer: '76.76.21.21',
        ttl: 300
      });
      console.log('✅ Added A record → 76.76.21.21 (Vercel)');

      // CNAME for www
      await apiCall(`/domains/${domain}/records`, 'POST', {
        host: 'www',
        type: 'CNAME',
        answer: 'cname.vercel-dns.com',
        ttl: 300
      });
      console.log('✅ Added CNAME www → cname.vercel-dns.com');

      console.log('\n🎉 DNS configured for Vercel!');
      console.log('Now add the domain in Vercel dashboard.');
    }
  } catch (error) {
    console.error('DNS error:', error.message);
  }
}

/**
 * Main CLI
 */
async function main() {
  const [command, ...args] = process.argv.slice(2);

  if (!command || command === '--help') {
    console.log(`
Domain Manager for Let's Vibe!
==============================

COMMANDS:
  check <domain>     Check if domain is available
  buy <domain>       Purchase a domain
  list               List your domains
  dns <domain>       Show DNS records
  dns <domain> vercel  Set up DNS for Vercel

EXAMPLES:
  node scripts/domain-manager.js check letsvibe.fm
  node scripts/domain-manager.js buy letsvibe.fm
  node scripts/domain-manager.js dns letsvibe.fm vercel
`);
    return;
  }

  switch (command) {
    case 'check':
      await checkDomain(args[0] || 'letsvibe.fm');
      break;
    case 'buy':
      await buyDomain(args[0] || 'letsvibe.fm');
      break;
    case 'list':
      await listDomains();
      break;
    case 'dns':
      await manageDNS(args[0] || 'letsvibe.fm', args[1] || 'get');
      break;
    default:
      console.error(`Unknown command: ${command}`);
  }
}

main().catch(console.error);
