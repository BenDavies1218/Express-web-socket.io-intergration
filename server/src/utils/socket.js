// REQURIE THE SERVER PACKAGE FROM SOCKET.IO
const { Server } = require("socket.io");

function socketConnect(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("send_message", (data) => {
      console.log(data);
      io.emit("receive_message", data);
    });
  });
}

module.exports = { socketConnect };
