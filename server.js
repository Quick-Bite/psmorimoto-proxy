const express = require('express');
const httpReq = require('axios');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3050;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/restaurants/:id/reviews', (req, res) => {
  // get all the reviews from the reviews server
  httpReq.get(`http://ec2-54-153-119-40.us-west-1.compute.amazonaws.com/restaurants/${req.params.id}/reviews`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/Suggestions', (req, res) => {
  // get all the Suggestions from the suggestions server
  httpReq.get(`http://18.188.10.73/restaurants/${req.params.id}/suggestions`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/menu-items', (req, res) => {
  // get all the menu items from the menu server
  httpReq.get(`http://54.241.249.88/restaurants/${req.params.id}/menu-items`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/menu-items/:itemId', (req, res) => {
  // get all the menu item Id from the menu server
  httpReq.get(`http://54.241.249.88/restaurants/${req.params.id}/menu-items/${req.params.itemId}`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/order', (req, res) => {
  // get all the menu order from the menu server
  httpReq.get(`http://54.241.249.88/restaurants/${req.params.id}/order`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/profiles', (req, res) => {
  // get all the profile from profile server
  console.log('PROFILES');
  httpReq.get(`http://52.15.232.64/restaurants/${req.params.id}/profiles`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});


app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
