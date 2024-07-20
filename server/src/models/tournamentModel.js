const mongoose = require("mongoose");
const { chatModel } = require("./chatModel.js");

const TournamentSchema = new mongoose.Schema(
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
    chats: {
      type: [chatModel],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const TournamentModel = mongoose.model("Tournament", TournamentSchema);
module.exports = { TournamentModel };
