const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample API routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the basic API!' });
});

// Sample POST request
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
