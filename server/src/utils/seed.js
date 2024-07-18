const EventModel = require("../models/eventModel"); // Assuming you have defined EventModel
const { databaseConnect, databaseClear, databaseClose } = require("./database");

async function seedEvents() {
  let eventData = [
    {
      title: "Gaming Tournament",
      author: "Ben",
      gameType: "FPS",
      users: ["John", "Alice"],
      scheduledTime: "2024-07-01T18:00:00Z",
    },
  ];

  try {
    let result = await EventModel.insertMany(eventData);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error seeding events:", error);
    return error;
  }
}
async function seed() {
  await databaseConnect();
  await databaseClear();

  let newUsers = await seedEvents();
  console.log(newUsers);

  console.log("Seeded data!");
  await databaseClose();
}

seed();
