const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mainRoutes = require('./Routes/mainRoute');
const otherRoutes = require('./Routes/otherRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', otherRoutes);

app.post('/submit-form', (req, res) => {

  const formData = req.body;

  res.send('Form submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});