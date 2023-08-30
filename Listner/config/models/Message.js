const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  ts: { type: Date, required: true },
  segments: {},
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;


