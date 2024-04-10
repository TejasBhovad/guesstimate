import { Schema, model, models } from "mongoose";

let Game;

try {
  // Check if the model already exists
  Game = model("Game");
} catch (error) {
  // If it doesn't exist, define the model
  Game = model(
    "Game",
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
      popularity: {
        type: Number,
        default: 0,
      },
    })
  );
}

export default Game;
