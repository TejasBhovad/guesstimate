import { Schema, model, models } from "mongoose";

let Movie;

try {
  // Check if the model already exists
  Movie = model("Movie");
} catch (error) {
  // If it doesn't exist, define the model
  Movie = model(
    "Movie",
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
      grossRevenue: {
        type: Number,
        default: 0,
      },
    })
  );
}

export default Movie;
