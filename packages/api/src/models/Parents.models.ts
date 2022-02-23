import mongoose, { Document, Schema } from "mongoose";

export interface Parents extends Document {
  children: Number;
  age: Number;
  location: String;
  schedule: Date;
  priceHour: Number;
  priceMonth: Number;
}

const schema = new Schema({
  children: { type: Number, require: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  schedule: { type: Date, required: true },
  priceHour: { type: Number, required: true },
  priceMonth: { type: Number, required: true },
});

export const Parents = mongoose.model<Parents>("Parents", schema);
