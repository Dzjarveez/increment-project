const { Schema, model } = require("mongoose");

const Increment = new Schema({
    count: {type: Number, require: true}
});

module.exports = model("Increment", Increment);