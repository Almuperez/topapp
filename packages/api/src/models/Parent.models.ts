import mongoose, { Document, Schema } from "mongoose";
import * as emailValidator from "email-validator";

//typescript para definir los tipos que acepta una función. controlar que funciona.
export type Location = {
  name: string;
  coordinates: [number];
};

export interface Parent extends Document {
  name: string;
  childrenIds: [string];
  location: string;
  phone: number;
  email: string;
  otherInformation: string;
}

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, `The location must have a minimum length of 3 characters`],
    maxlength: [15, `The location must have a maximun length of 15 characters`],
  },
  childrenIds: { type: [Schema.Types.ObjectId], ref: "Child" },
  location: {
    name: {
      type: String,
    },
    coordinates: [Number],
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

  otherInformation: {
    type: String,
    required: true,
    minlength: [
      3,
      `The information must have a minimum length of 3 characters`,
    ],
    maxlength: [
      50,
      `The information must have a maximun length of 15 characters`,
    ],
  },
});

export const Parent = mongoose.model<Parent>("Parent", schema);
