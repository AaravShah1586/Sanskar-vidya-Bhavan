const mongoose = require('mongoose');
const express = require('express');

const schoolSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const school = mongoose.model('contact',schoolSchema);

module.exports = school;
