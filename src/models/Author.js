import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true}
});

const authors = mongoose.model("authors", AuthorSchema);

export default authors;
