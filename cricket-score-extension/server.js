const express = require('express');
const userAgent = require('user-agents');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');

puppeteer.use(StealthPlugin());

const app = express();
const PORT = 3000;

// Serve the screenshot file
app.use(express.static(__dirname));

async function captureScreenshot() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.random().toString());
    await page.goto('https://www.google.com/search?q=Google+live+cricket+scores');
    
    const filePath = __dirname + '/screenshot.png';
    await page.screenshot({ path: filePath, fullPage: false });

    await browser.close();
    console.log('Screenshot updated.');
}

// Capture screenshot every 300 seconds
setInterval(captureScreenshot, 900000);

// API to fetch latest screenshot
app.get('/latest-screenshot', (req, res) => {
    res.sendFile(__dirname + '/screenshot.png');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    captureScreenshot(); // Capture an initial screenshot
});
