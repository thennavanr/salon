const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
   res.render('index');
})

app.get('/gallery', function (req, res) {
   res.render('gallery');
})

app.get('/contact', function (req, res) {
   res.render('contact');
})

app.listen(3000, function () {
  console.log('server starting...');
})
