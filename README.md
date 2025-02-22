# QR-Generator
Used Node Package Module For Generating URL Such As --> {inquirer, qr-image}

# QR Code Generator

This project is a simple QR Code Generator using Node.js. It takes user input (a URL) and generates a QR code image while saving the URL to a text file.

## Prerequisites
Make sure you have **Node.js** installed on your system. You can check if Node.js is installed by running:

```sh
node -v
```

If not installed, download it from [Node.js official website](https://nodejs.org/).

## Setup

1. **Initialize npm in the project**
   ```sh
   npm init -y
   ```
   This command creates a `package.json` file, which manages dependencies.

2. **Install required npm packages**
   ```sh
   npm install inquirer qr-image
   ```
   - `inquirer` is used for user input.
   - `qr-image` is used for generating QR codes.

## Running the QR Code Generator

1. **Run the script**
   ```sh
   node filename.js
   ```
   Replace `filename.js` with the actual filename of your script.

2. **Enter a URL**
   - The program will prompt you to enter a URL.
   - After entering the URL, it generates a `qr_img.png` file with the QR code.
   - The entered URL is also saved in a `URL.txt` file.

## Output Files
- `qr_img.png` → Contains the generated QR code image.
- `URL.txt` → Stores the entered URL for reference.

## Example Usage
```sh
? Enter a URL: https://example.com
URL saved successfully!
```

The QR code image will be generated in the same directory.

## Troubleshooting
- If you get an error, ensure you have installed the necessary packages correctly using `npm install inquirer qr-image`.
- If the terminal does not show the prompt, try running the script again.

## License
This project is open-source and free to use.

