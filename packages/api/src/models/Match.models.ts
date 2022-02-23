import mongoose, { Document, Schema } from "mongoose";
import { Kindergarden } from "./Kindergarden.models";
import { Nanny } from "./Nanny.model";
import { Parents } from "./Parents.models";

export interface Booking extends Document {
  nannyId: Nanny["_id"];
  kindergardenId: Kindergarden["_id"];
  parentsId: Parents["_id"];
  dateStart: Date;
  dateEnd: Date;
  totalprice: Number;
  status: Boolean;
  schedule: Date;
}

const schema = new Schema({
  nannyId: { type: Schema.Types.ObjectId, ref: "Nanny" },
  kindergardenId: { type: Schema.Types.ObjectId, ref: "Kindergarden" },
  parentsId: { type: Schema.Types.ObjectId, ref: "Parents" },
  dateStart: { type: Date, require: true },
  dateEnd: { type: Date, require: true },
  totalprice: { type: Number, require: true },
});

export const Booking = mongoose.model<Booking>("Booking", schema);
