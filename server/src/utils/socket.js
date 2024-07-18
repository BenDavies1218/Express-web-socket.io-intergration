const { Server } = require("socket.io");
const { ChatModel } = require("../models/chatModel");

function socketConnect(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", async (chatId) => {
      socket.join(chatId);
      console.log(`User ${socket.id} joined chat ${chatId}`);

      // Fetch existing messages from the database
      const messages = await ChatModel.find({ chatId }).sort({ createdAt: 1 });

      // Send existing messages to the client
      socket.emit("load_messages", messages);
    });

    socket.on("send_message", async (data) => {
      const { message, userId, chatId } = data;
      console.log(
        `Received message from user ${userId} in chat ${chatId}: ${message}`
      );

      // Save the message to the database
      const chatMessage = new ChatModel({ chatId, userId, message });
      await chatMessage.save();

      // Emit the message to the chat room
      io.to(chatId).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${socket.id}`);
    });
  });
}

module.exports = { socketConnect };
