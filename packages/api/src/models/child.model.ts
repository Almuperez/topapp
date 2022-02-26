import mongoose, { Document, Schema } from "mongoose";

export interface Child extends Document {
  name: String;
  dateOfBirth: Date;
  gender: Boolean;
  otherInformation: [String];
}

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, `The location must have a minimum length of 3 characters`],
    maxLength: [15, `The location must have a maximun length of 15 characters`],
  },

  dateOfBirth: {
    type: Date,
    min: "2030-02-24",
    max: "2007-02-24",
  },

  gender: {
    type: String,
    unique: true,
    enum: {
      values: ["Niña", "Niño"],
      message: "{VALUE} is not supported",
    },
  },

  otherInformation: {
    type: [String],
    require: true,
    minLength: [10, `The location must have a minimum length of 3 characters`],
    maxLength: [50, `The location must have a maximun length of 15 characters`],
  },
});

export const Child = mongoose.model<Child>("Child ", schema);
