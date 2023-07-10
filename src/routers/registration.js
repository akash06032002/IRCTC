const express = require("express");
const add_User = new express.Router();

const registration = require("../models/userReg");

//handle user registration-post req in api
add_User.post("/registration", async (req, res)=>{
    try {
      const addUser =  new registration (req.body)
      console.log(req.body);
      const insertUser = addUser.save();
      res.status(200).send("Account Successfully Created");
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = add_User;