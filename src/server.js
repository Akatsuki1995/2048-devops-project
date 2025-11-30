const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (css, js, images)
app.use(express.static(path.join(__dirname, '/')));

// Serve the game
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`2048 App running on port ${PORT}`);
});
