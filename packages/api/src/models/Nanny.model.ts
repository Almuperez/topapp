import mongoose, { Document, Schema } from "mongoose";
import * as emailValidator from "email-validator";

// genero un array con el objeto day que es un numero del 1 al 7 y start que es un string y end que es un string -->será la hora en la que termine esa persona
export type Day = {
  day: Number;
  start: String;
  end: String;
};

export interface Nanny extends Document {
  name: String;
  dateOfBirth: Date;
  gender: Boolean;
  location: String;
  availability: [Day];
  isActive: boolean;
  priceHour: Number;
  calificación: Number;
  img: String;
  phone: Number;
  email: String;
}

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, `The location must have a minimum length of 3 characters`],
    maxlength: [15, `The location must have a maximun length of 15 characters`],
  },

  dateOfBirth: {
    type: Date,
    min: "2004-02-24",
  },

  gender: {
    type: String,
    unique: true,
    enum: {
      values: ["Femenino", "Masculino"],
      message: "{VALUE} is not supported",
    },
  },

  location: {
    name: {
      type: String,
    },
    coordinates: [Number],
  },

  availability: {
    type: [
      {
        day: Number,
        start: String,
        end: String,
      },
    ],
  },

  isActive: { type: Boolean, default: true },

  priceHour: {
    type: Number,
    min: 5,
    max: 15,
  },

  calificación: { type: Number, min: 1, max: 5 },

  img: {
    type: String,
    required: [true, `Image required`],
  },

  phone: {
    type: Number,
    validate: {
      validator: function (number: any) {
        return /^\d*$/.test(number) && number.toString().length === 9;
      },
      message: (props: any) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,

    validate: {
      validator: function (v: string) {
        return emailValidator.validate(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
});

export const Nanny = mongoose.model<Nanny>("Nanny", schema);
