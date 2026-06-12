const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  Category: String,
  mediaType: String,
  mediaUrl: String,
  Prompt: String,
  Prompt2: String,
  description: String,
});
module.exports = mongoose.model("Prompt", ContactSchema);
