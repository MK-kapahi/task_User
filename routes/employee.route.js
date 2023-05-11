const express = require('express');
const app = express();
const employeRoute = express.Router();
let Employee = require('../model/employe');

// Get all Book
employeRoute.route('/get').get(async (req, res) => {
    await Employee.find().then((err,result)=>{
         if(err)
         {
            res.send(err)
         }

         else
         {
            res.status(200).send({
                status: 'Success',
                data: result,
              })
         }
    })
   
})
// Get Book
employeRoute.route('/read-emp/:id').get((req, res) => {
    Employee.findById(req.params.id, (error, data) => {
    if (error) {
      // @ts-ignore
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Book
employeRoute.route('/update-book/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Employee updated successfully!')
    }
  })
})
// Delete Book
employeRoute.route('/delete-emp/:id').delete((req, res, next) => {
    Employee.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = employeRoute;

