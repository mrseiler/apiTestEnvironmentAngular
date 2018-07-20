var express = require('express')
var router = express.Router()
var sequelize = require('../db');
const Student = sequelize.import('../models/student')

router.get("/students", function(req, res) {

    Student
    .findAll({
      attributes: ['first_name', 'last_name']
    })
    .then(
      function findAllSuccess(data) {
          res.json(data);
      },
      function findAllError(err) {
          res.send(500, err.message);
      }
  );
  })
router.post("/addstudent", function(req, res) {

    Student
      .create({
        first_name: req.body.student.first_name,
        last_name: req.body.student.last_name,
        email: req.body.student.email,
        password: req.body.student.password,
        resume: req.body.student.resume
      })
      .then(
        function createSuccess(student) {
          res.json({
            student: student
          });
  
        },
        function createError(err) {
          res.send(500, err.message);
        }
      );
  })
  router.delete('/deletestudent/:id', function(req, res) {
    var data = req.params.id;
  
    Student
        .destroy({ 
            where: { id: data}
        }).then(
            function deleteLogSuccess(data){ 
                res.send("you successfully deleted student" + data);
            },
            function deleteLogError(err){ 
                res.send(500, err.message);
            }
        );
  });
  


module.exports = router;