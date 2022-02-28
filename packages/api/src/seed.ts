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

  // Create parent : comprobadas rutas ok
  const parent1 = await Parent.create({
    name: "Padre Uno",
    location: "Puerto de Santa María",
    phone: 660240488,
    email: "almudena@gmail.com",
    otherInformation: "Padre uno información",
  });

  const parent2 = await Parent.create({
    name: "Padre Dos",
    location: "Chipiona",
    phone: 123456789,
    email: "padreDos@gmail.com",
    otherInformation: "Padre dos información",
  });

  // Create nanny: comprobada ruta - list, finbyid, update, new, delete ok

  const nanny1 = await Nanny.create({
    name: "Nanny 1",
    dateOfBirth: "1991-04-01",
    gender: "Femenino",
    location: "Rota",
    availability: [
      {
        day: 0,
        start: "10:00",
        end: "18:00",
      },
      {
        day: 1,
        start: "09:00",
        end: "17:00",
      },
      {
        day: 2,
        start: "09:00",
        end: "13:00",
      },
      {
        day: 3,
        start: "12:00",
        end: "17:00",
      },
      {
        day: 4,
        start: "11:00",
        end: "14:00",
      },
    ],
    priceHour: 10,
    img: "image URL",
    phone: 654876098,
    email: "nannyUno@gmail.com",
  });

  const nanny2 = await Nanny.create({
    name: "Nanny 2",
    dateOfBirth: "1990-11-25",
    gender: "Masculino",
    location: "Puerto de Santa María",
    availability: [
      {
        day: 0,
        start: "10:00",
        end: "18:00",
      },
      {
        day: 1,
        start: "09:00",
        end: "17:00",
      },
      {
        day: 2,
        start: "09:00",
        end: "13:00",
      },
      {
        day: 3,
        start: "12:00",
        end: "17:00",
      },
      {
        day: 4,
        start: "11:00",
        end: "14:00",
      },
    ],
    priceHour: 12,
    img: "image URL 2",
    phone: 765345232,
    email: "nannyDos@gmail.com",
  });

  // Prueba para postman. si pongo el genero en misnucula: masculino, no funciona, tengo que poner Masculino
  //const nanny3 = await Nanny.create({
  //   "name": "Nanny 3",
  //   "dateOfBirth": "1901-03-2",
  //   "gender": "Masculinoo",
  //   "availability":
  //       [
  //           {
  //           "day": 0,
  //           "start": "11:00",
  //           "end": "13:00"
  //           },
  //           {
  //           "day": 1,
  //           "start": "09:00",
  //           "end": "14:00"
  //           },
  //           {
  //           "day": 3,
  //           "start": "13:00",
  //           "end": "17:00"
  //           },
  //           {
  //           "day": 3,
  //           "start": "11:00",
  //           "end": "18:00"
  //           },
  //           {
  //           "day": 4,
  //           "start": "11:00",
  //           "end": "15:00"
  //           }
  //           ],
  //       "isActive": true,
  //       "priceHour": 8,
  //       "img": "image URL",
  //       "phone": 654876097,
  //       "email": "nannytres@gmail.com"

  // });

  //create kindergarden

  const kindergarden1 = await Kindergarden.create({
    name: "Kindergarden 1",
    location: "Puerto de Santa María",
    openTime: "10:00",
    closeTime: "18:00",
    priceMonth: 500,
    classInfo: "Privada",
    comedor: true,
    img: "image URL Kindergarden 1",
    phone: 660240488,
    capacity: 20,
    email: "kindergarden1@gmail.com",
  });

  // const kindergarden2 = await Kindergarden.create({
  //   name: "Kindergarden 2",
  //   location: "Rota",
  //   openTime: "9:00",
  //   closeTime: "13:00",
  //   priceMonth: 300,
  //   classInfo: "Publica",
  //   comedor: false,
  //   img: "image URL Kindergarden 2",
  //   phone: 764987236,
  //   capacity: 10,
  //   email: "kindergarden2@gmail.com",
  // });

  // create children

  const child_de_parent_1_one = await Child.create({
    name: "Sofia",
    dateOfBirth: "2021-02-16",
    gender: "Niña",
    otherInformation: "Niña buena",
  });

  //  hijo desde postman
  // {
  // "name": "Pepito",
  // "dateOfBirth": "2017-05-11",
  // "gender": "Niño",
  // "otherInformation": "Niño simpático",
  // }

  // await Parent.findByIdAndUpdate(parent1?._id, {
  //   $push: { childrenIds: child_de_parent_1_one._id },
  // });
  // await Parent.findByIdAndUpdate(parent2?._id, {
  //   $push: { childrenIds: child_de_parent_2_one._id },
  // });

  // create match

  const match1 = await Match.create({
    nannyId: nanny1._id,
    parentId: parent2._id,
    totalPrice: nanny1.priceHour,
  });


  // match desde postman ??
  //  { "nannyId": kindergarden1._id,
  //   "parentId": parent1._id,
  //   "totalPrice": kindergarden1.priceMonth,
  // };
})();
