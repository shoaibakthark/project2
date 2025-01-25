const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (e.g., images, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});

