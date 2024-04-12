import { Schema, model, models } from "mongoose";

let Google;

try {
  // Check if the model already exists
  Google = model("Google");
} catch (error) {
  // If it doesn't exist, define the model
  Google = model(
    "Google",
    new Schema(
      {
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
        score: {
          type: Number,
          default: 0,
        },
      },
      { collection: "google" }
    )
  );
}

export default Google;
