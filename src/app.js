const express = require("express");
const app = express();
app.use(express.json());
require("../src/db/conn");

const addUser = require("../src/routers/registration");
const get_Seat = require("../src/routers/getSeat");
const add_Train = require("../src/routers/addTrain");

app.use(addUser);
app.use(get_Seat);
app.use(add_Train);


const port = process.env.PORT  || 3001;

app.get('/', (req, res)=>{
    res.send("Running");
})

app.listen(port, ()=>{
    console.log(`Connection is live at port no. ${port}`);
})
  