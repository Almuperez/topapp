import mongoose, { Document, Schema } from "mongoose";
import * as emailValidator from "email-validator";

export interface Kindergarden extends Document {
  name: String;
  location: String;
  openTime: String;
  closeTime: String;
  priceMonth: Number;
  classInfo: String;
  califacion: Number;
  comedor: boolean;
  img: String;
  phone: Number;
  email: String;
  capicity: Number;
}

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, `The location must have a minimum length of 3 characters`],
    maxlength: [25, `The location must have a maximun length of 25 characters`],
  },

  location: {
    name: {
      type: String,
    },
    coordinates: [Number],
  },

  //lo mismo que en niñera
  openTime: {
    type: String,
    default: "07:00",
  },

  closeTime: {
    type: String,
    default: "17:00",
  },

  priceMonth: { type: Number, required: true },

  classInfo: {
    type: String,
    unique: true,
    enum: {
      values: ["Privada", "Pública", "Ludoteca"],
      message: "{VALUE} is not supported",
    },
  },

  calificación: { type: Number, required: true },

  comedor: { type: Boolean },

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

  capacity: {
    type: Number,
    max: 20,
  },
});

export const Kindergarden = mongoose.model<Kindergarden>(
  "Kindergarden",
  schema
);
