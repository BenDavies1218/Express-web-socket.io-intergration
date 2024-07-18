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
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TournamentModel = mongoose.model("Tournament", TournamentSchema);

module.exports = {
  TournamentModel,
};
