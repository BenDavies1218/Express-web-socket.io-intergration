const { initializeServer } = require("./server");
const { initializeDB } = require("./utils/database");
const { initializeSocket } = require("./utils/socket");

async function startServer() {
  try {
    // Initialize the database
    await initializeDB();

    // Initialize the server and socket.io
    const server = initializeServer();
    initializeSocket(server);

    // Start listening for requests
    const PORT = process.env.PORT || 3001;
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
