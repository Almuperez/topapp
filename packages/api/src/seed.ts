import mongoose from "mongoose";
import { DB_URL, DB_NAME } from "./config";
import { Child } from "./models/Child.model";
import { Kindergarden } from "./models/Kindergarden.models";
import { Match } from "./models/Match.models";
import { Nanny } from "./models/Nanny.model";
import { Parent } from "./models/Parent.models";

(async () => {
  await mongoose.connect(`${DB_URL}/${DB_NAME}`);
  // drop collection: para no duplicar los modelos
  try {
    await Child.deleteMany();
    await Kindergarden.deleteMany();
    await Match.deleteMany();
    await Nanny.deleteMany();
    await Parent.deleteMany();
  } catch (error) {
    console.log("there are no item to drop from db");
  }

  // Create parent
  const parent1 = await Parent.create({
    name: "Almudena Perez",
    location: "Puerto de Santa María",
    phone: 660240485,
    email: "almudenaperezv@gmail.com",
    otherInformation: "Sofi es la mejor",
  });
  console.log(parent1);
  const parent2 = await Parent.create({
    name: "Padre Dos",
    location: "Chipiona",
    phone: 123456789,
    email: "almudenaperezv+padreDos@gmail.com",
    otherInformation: "Padre dos información",
  });

  const parent3 = await Parent.create({
    name: "Padre Tres",
    location: "Rota",
    phone: 616182921,
    email: "almudenaperezv+padreTres@gmail.com",
    otherInformation: "Padre Tres información",
  });
})();
