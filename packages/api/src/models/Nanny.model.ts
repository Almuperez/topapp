import mongoose, { Document, Schema } from "mongoose";

export interface Nanny extends Document {
  datebirthday: Number;
  gender: boolean;
  location: String;
  schedule: Date;
  startDate: Date;
  status: boolean;
  priceHour: Number;
  calificación: Number;
}

const schema = new Schema({
  age: { type: Number, required: true },
  location: { type: String, required: true },
  schedule: { type: Date, required: true },
  priceHour: { type: Number, required: true },
});

export const Nanny = mongoose.model<Nanny>("Nanny", schema);
