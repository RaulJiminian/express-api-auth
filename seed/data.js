import db from "../db/connection.js";
import Pet from "../models/pet.js";

const insertData = async () => {
  await db.dropDatabase();

  const pets = [
    {
      name: "Cherie",
      age: 4,
      breed: "Short haird tuxedo cat",
    },
    {
      name: "Charlie",
      age: 4,
      breed: "Medium harid maine cat",
    },
    {
      name: "Milo",
      age: 7,
      breed: "Long-haired White Siberian Cat",
    },
  ];

  await Pet.create(pets);

  console.log("Pets have entered the Database!");

  await db.close();
};

insertData();
