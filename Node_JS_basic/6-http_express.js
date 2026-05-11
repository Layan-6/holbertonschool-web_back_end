const express = require('express');

// Create Express app
const app = express();

// Define route for root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app variable as required
module.exports = app;
