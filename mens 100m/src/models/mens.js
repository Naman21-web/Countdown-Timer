const express = require('express');
const mongoose  = require('mongoose');

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true//Removes spaces if there are so mny spaces before and after nme
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }

})


//We are creating a new collection
const MensRanking = new mongoose.model("MenRanking",menSchema)

module.exports = MensRanking;