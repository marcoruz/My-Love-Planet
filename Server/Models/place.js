

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ortSchema = new mongoose.Schema(
  {
      
    city: {type: String},
  
    country: {type: String},
  
    reminder: {type: String},
    
    note: {type: String},

    visit: {type: Boolean},
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("Places", ortSchema);

