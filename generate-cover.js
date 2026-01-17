const { fal } = require("@fal-ai/client");
const fs = require("fs");
const path = require("path");
const https = require("https");

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generateCover() {
  const prompt = `Minimalist podcast cover art on warm cream off-white paper background.

Large stacked typography in the center:
"LET'S"
"VIBE"

In bold elegant black serif font, stacked vertically, with "LET'S" on top and "VIBE" below it.

Below the main text in smaller elegant serif: "creativity in the age of AI"

No imagery, no icons, no illustrations, no numbers. Just typography on warm cream background. Timeless analog zen quality. Magazine editorial aesthetic. Rick Rubin Tetragrammaton style.`;

  console.log("Generating cover with NanoBanana Pro...");
  console.log("Prompt:", prompt);
  console.log("\n---\n");

  try {
    const result = await fal.subscribe("fal-ai/nano-banana-pro", {
      input: {
        prompt: prompt,
        image_size: "square_hd",
        num_images: 2,
        enable_safety_checker: false
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          console.log("Generating...");
        }
      }
    });

    const outputDir = path.join(__dirname, "cover-art-output");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().slice(0, 16).replace(":", "-");

    for (let i = 0; i < result.data.images.length; i++) {
      const image = result.data.images[i];
      const filename = `cover-minimal-${timestamp}-v${i + 1}.png`;
      const filepath = path.join(outputDir, filename);

      await downloadImage(image.url, filepath);
      console.log(`Saved: ${filepath}`);
    }

    console.log("\nDone! Check cover-art-output/");
  } catch (error) {
    console.error("Error:", error.message);
    console.log("\nFull error:", JSON.stringify(error, null, 2));
  }
}

generateCover();
