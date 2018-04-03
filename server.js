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

app.get('/services', function (req, res) {
   res.render('services');
})
app.get('/contact', function (req, res) {
   res.render('contact');
})

app.listen(process.env.PORT ||3000, function () {
  console.log('server starting...');
})
