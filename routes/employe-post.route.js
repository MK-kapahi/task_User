const express = require('express');
const app = express();
const employeRoutePost = express.Router();
let Employee = require('../model/employe');
const { Error } = require('mongoose');
// Add Book
employeRoutePost.route('/').post( async (req, res, next) => {
    await Employee.create(req.body).then((data) => {
      res.status(201).send({
        status: 'Success',
        data: data,
      })
  }).catch((err)=>{
    console.log(err)
  })
});

module.exports = employeRoutePost;

