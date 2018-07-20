var sequelize = require('../db');
const student = sequelize.import('../models/student')


exports.getAll = function(){
        return student.findAll({
            
        })
}

exports.getOneStudent = function(req, id){
    return student.findOne({
        where: {
            id:req.params.id
        }
    })
}

exports.createStudent = function(req){
    return student.create({
        first_name : req.body.student.first_name,
        last_name : req.body.student.last_name,
        email : req.body.student.email,
        password : req.body.student.password,
        resume : req.body.student.resume,
        social_media_id : req.body.student.social_media_id,
    })
}

exports.editStudent = function(req, id){
    return student.update({
        first_name : req.body.student.first_name,
        last_name : req.body.student.last_name,
        email : req.body.student.email,
        password : req.body.student.password,
        resume : req.body.student.resume,
        social_media_id : req.body.student.social_media_id,
    },
    {where: {id: req.params.id}})
}

exports.deleteStudent = function(req ,id){
    return student.destroy({
        where:{ id:req.params.id}
    })
}