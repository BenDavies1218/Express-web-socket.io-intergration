const { UserModel } = require("../models/userModel");
const { TournamentModel } = require("../models/tournamentModel");
const {
  databaseConnect,
  databaseClear,
  databaseClose,
} = require("./database.js");
const dotenv = require("dotenv");
dotenv.config();

async function seedUsers() {
  let userData = [
    {
      username: "john_doe",
      email: "john_doe@example.com",
    },
  ];

  try {
    let result = await UserModel.insertMany(userData);
    console.log("Users seeded:", result);
    return result;
  } catch (error) {
    console.error("Error seeding users:", error);
    return error;
  }
}

async function seedTournaments(users) {
  let tournamentData = [
    {
      tournamentName: "Summer Coding Tournament",
      author: users[0]._id,
      users: ["coding", "life"],
      chats: [],
    },
  ];

  try {
    let result = await TournamentModel.insertMany(tournamentData);
    console.log("Tournaments seeded:", result);
    return result;
  } catch (error) {
    console.error("Error seeding tournaments:", error);
    return error;
  }
}

async function seed() {
  await databaseConnect();
  await databaseClear();

  let newUsers = await seedUsers();
  let newTournaments = await seedTournaments(newUsers);
  console.log("Seeded data:", { newUsers, newTournaments });

  await databaseClose();
}

seed();
