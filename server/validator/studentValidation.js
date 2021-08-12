const Validator = require('validator');
const isEmpty = require('is-empty');
const { modelName } = require('../models/studentModel');

module.exports = function validateStudentData(data){
    let errors = {};

    data.firstName = isEmpty(data.firstName) ? "" :data.firstName;
    if(Validator.isEmpty(data.firstName)){
        errors.firstName = "first Name field is required";
    }
    data.lastName = isEmpty(data.lastName) ? "" :data.lastName;
    if(Validator.isEmpty(data.lastName)){
        errors.lastName = "last Name field is required";
    }
    data.email = isEmpty(data.email) ? "" :data.email;
    if(Validator.isEmpty(data.email)){
        errors.email = " email field is required";
    }
    data.age = isEmpty(data.age) ? "" :data.age;
    if(Validator.isEmpty(data.age)){
        errors.age = "age field is required";
    }
    return{
        errors, 
        isValid: isEmpty(errors)
    };
};