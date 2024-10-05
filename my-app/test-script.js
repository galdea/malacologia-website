const { google } = require("googleapis");
const { promises: fs } = require("fs");
const path = require("path"); // Ensure this line is included

async function main() {
    const keyPath = path.join(__dirname, "secrets.json"); // Correctly defining the path
    const keyFile = await fs.readFile(keyPath, "utf-8");
    const key = JSON.parse(keyFile);

    const auth = new google.auth.GoogleAuth({
        credentials: key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = "16w2N5fkvxMfgvIap1xNWt6HaltVCx6_ioRkWLm-DPrs"; // Update with your sheet ID
    const range = "Sheet1!A1:B1"; // Adjust the range as necessary

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        console.log("Data fetched successfully:", response.data.values);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

main();
