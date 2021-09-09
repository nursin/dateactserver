const express = require('express');
const Profile = require('../models/profile');
const profileRouter = express.Router();

profileRouter.route('/')
.get((req, res, next) => {
  Profile.find()
  .then(profile => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(profile)
  })
  .catch(err => next(err));
})
.post((req, res, next) => {
  Profile.create(req.body)
  .then(profile => {
      console.log('Profile Created ', profile);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(profile);
  })
  .catch(err => next(err));
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /profile');
})
.delete((req, res, next) => {
  Profile.deleteMany()
  .then(response => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(response);
  })
  .catch(err => next(err));
});

module.exports = profileRouter;
