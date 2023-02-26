import mongoose from "mongoose";

const Author = new mongoose.Schema({
  name: String,
});

const blogSchema = new mongoose.Schema({
  author: Author,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
