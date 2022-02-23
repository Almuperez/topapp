import mongoose, { Document, Schema } from "mongoose";

export interface Kindergarden extends Document {
  location: String;
  schedule: Date;
  priceMonth: Number;
  tipo: String;
  califacion: Number;
  comedor: boolean;
}

const schema = new Schema({
  age: { type: Number, required: true },
  location: { type: String, required: true },
  schedule: { type: Date, required: true },
  priceMonth: { type: Number, required: true },
  information: { type: String, require: true },
});

export const Kindergarden = mongoose.model<Kindergarden>(
  "Kindergarden",
  schema
);
