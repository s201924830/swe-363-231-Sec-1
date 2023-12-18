const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Routes
const mainRoutes = require('./Routes/mainRoute');
const otherRoutes = require('./Routes/OtherRoutes');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use("/", require("./Routes/mainRoute"));
app.use('/Other', require("./Routes/OtherRoutes"));

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  // Do something with formData
  res.send('Form submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});