const express = require("express");
const add_Train = new express.Router();

const addTrain = require("../models/Train");

//handle train-post req in api
add_Train.post("/trains/create", async (req, res)=>{
    try {
      const addUser =  new addTrain (req.body)
      console.log(req.body);
      const insertUser =  addUser.save();
      res.status(200).send(insertUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = add_Train;