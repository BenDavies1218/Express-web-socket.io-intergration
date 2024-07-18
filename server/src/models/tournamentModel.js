const mongoose = require("mongoose");

const TournamentSchema = mongoose.Schema(
  {
    tournamentName: {
      type: String,
      unique: true,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    users: {
      type: [String],
      enum: ["life", "travel", "photography", "coding"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TournamentModel = mongoose.model("Tournament", TournamentSchema);

module.exports = {
  TournamentModel,
};
