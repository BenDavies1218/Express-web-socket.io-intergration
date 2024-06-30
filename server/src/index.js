const { serverConnect } = require("./server");
const { databaseConnect } = require("./utils/database");
const { socketConnect } = require("./utils/socket");

async function startServer() {
  try {
    // CONNECT TO THE DATABASE
    await databaseConnect();

    // START THE SERVER INSTANCE
    const server = serverConnect();

    // START LISTENING FOR EMITIONS WITH SOCKET.IO
    socketConnect(server);

    // START LISTENING FOR REQUESTS
    const PORT = process.env.PORT || 3001;
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
