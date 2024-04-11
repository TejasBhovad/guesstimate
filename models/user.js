import { Schema, model, models } from "mongoose";

let User;

try {
  // Check if the model already exists
  User = model("User");
} catch (error) {
  // If it doesn't exist, define the model
  User = model(
    "User",
    new Schema({
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      image: {
        type: String,
        required: true,
        trim: true,
      },
      highscore: {
        type: Number,
        default: 0,
      },
      stats: {
        type: Object,
        default: {
          gamesPlayed: 0,
          incorrectGuesses: 0,
          totalCardsPlayed: 0,
        },
      },
    })
  );
}

export default User;
