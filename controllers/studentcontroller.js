var express = require('express')
var router = express.Router()
var Student = require('../services/studentServices');


router.get('/students' , function(req, res) {

    Student
    .getAll()
    .then(
      function findAllSuccess(data) {
          res.json(data);
      },
      function findAllError(err) {
          res.send(500, err.message);
      }
  );
})

router.post('/api/createstudent', function (req, res) {
    Student.createStudent(req)
    .then(
        function createSuccess(student) {
            res.json({
                student: student
            });            
        },
        function createError(err){
            res.send(500, err.message);
        }
    )
})

router.put(`/api/studentaccount/:id`, function(req, res) {
        var data = req.params.id;
        
        Student.editStudent(req, data)

            .then(
                function updateSuccess(student) {
                    res.json({
                        student: student
                    });            
                },
                function updateError(err){
                    res.send(500, err.message);
                }
            )
            console.log(Student.editStudent(req, data))
    });

router.get(`/api/studentaccount/:id`, function(req, res) {
        var id = req.params.id;

        Student.getOneStudent(req, id)
            .then(
                function findOneSuccess(data) {
                    res.json(data);
                },
                function findOneError(err) {
                    res.send(500, err.message);
                }
            );
    });

router.delete(`/api/deletestudent/:id`, function(req, res) {
    var id = req.params.id;

    Student.deleteStudent(req, id)
        .then(
            function deleteSuccess(data) {
                res.send("Student successfully deleted");
            },
            function deleteError(err){
                res.send(500, err.message);
            }
        )
})

module.exports = router;