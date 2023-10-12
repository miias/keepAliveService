const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const WEBSITE_URL = 'https://dynamic-helpful-drill.glitch.me';
const PING_INTERVAL_MS = 240000; // 1 minute interval (adjust as needed)

function pingWebsite() {
    axios.get(WEBSITE_URL)
        .then(response => {
            console.log(`Ping successful at ${new Date()}`);
        })
        .catch(error => {
            console.error(`Failed to ping ${WEBSITE_URL}. Error: ${error.message}`);
        });
}

// Initial ping when the server starts
pingWebsite();

// Schedule automatic pings at the specified interval
setInterval(pingWebsite, PING_INTERVAL_MS);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
