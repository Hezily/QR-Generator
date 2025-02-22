import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1. Prompt user for a URL
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter a URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL; // Extract user input

    // 2. Generate QR code image
    const qr_png = qr.image(url, { type: "png" });
    const qrFilePath = "qr_img.png";
    qr_png.pipe(fs.createWriteStream(qrFilePath));

    console.log(`QR code saved as ${qrFilePath}`);

    // 3. Save URL to a text file
    const urlFilePath = "URL.txt";
    fs.writeFile(urlFilePath, url, (err) => {
      if (err) {
        console.error("Error saving URL:", err);
        return;
      }
      console.log(`URL saved in ${urlFilePath}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
