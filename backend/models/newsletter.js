import mongoose, { Schema } from "mongoose";

const newsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      date: { type: Date, default: Date.now },
    },
  },
  {
    timestamps: true,
  }
);

const Newsletter = mongoose.model("newsletter", newsletterSchema);

export { Newsletter };
