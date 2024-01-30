// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

const secretKey = 'adminKey'; // Replace with a strong, unique secret key

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Replace the following with your actual authentication logic (e.g., check against a database)
  const isValidUser = username === 'admin' && password === 'q1w2e3r4';

  if (isValidUser) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ success: true, message: 'Login successful', token, name:'test01' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});