
const mongoose = require("mongoose");

const Pschema = new mongoose.Schema({name : String, email : String , password : String});

module.exports = mongoose.model("users" , Pschema);