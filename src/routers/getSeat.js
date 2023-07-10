const express = require("express");
const get_Seat = new express.Router();

const Train = require("../models/Train");

//handle get req of 1 in api
get_Seat.get("/trains/availability/:id", async (req, res)=>{
    try {
      const userId = req.params.id;  //id from url
      const getTrain = await Train.findById({_id: userId}).select("seat_available"); //reading particular doc
      res.status(201).send(getTrain);
    } catch (error) {
        res.sendStatus(400);
    }
})


module.exports = get_Seat;