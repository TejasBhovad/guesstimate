import { Schema, model, models } from "mongoose";

let Song;

try {
  // Check if the model already exists
  Song = model("Song");
} catch (error) {
  // If it doesn't exist, define the model
  Song = model(
    "Song",
    new Schema({
      name: {
        type: String,
        required: true,
        trim: true,
      },

      image: {
        type: String,
        required: true,
        trim: true,
      },
      streams: {
        type: Number,
        default: 0,
      },
    })
  );
}

export default Song;
