import mongoose, { Document, Schema } from "mongoose";
import { Kindergarden } from "./Kindergarden.models";
import { Nanny } from "./Nanny.model";
import { Parent } from "./Parent.models";

export interface Match extends Document {
  nannyId: string;
  kindergardenId: string;
  parentId: string;
  totalPrice: number;
  hasContacted: boolean;
  hasBooked: boolean;
}

const schema = new Schema({
  nannyId: { type: Schema.Types.ObjectId, ref: "Nanny" },
  kindergardenId: { type: Schema.Types.ObjectId, ref: "Kindergarden" },
  parentId: { type: Schema.Types.ObjectId, ref: "Parent" },

  //a las niñeras les aparecera 5€/h y en las gaurderias 100€/month
  totalPrice: { type: Number, require: true },
  hasContacted: { type: Boolean },
  hasBooked: { type: Boolean },
});

export const Match = mongoose.model<Match>("Match", schema);
