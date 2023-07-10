const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/IRCTC",{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Sucessful");
}).catch((e)=>{
    console.log("No Connection "+ e);
})
