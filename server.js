const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Utilise la variable d'environnement PORT

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html for all requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
