import mongoose, { Document, Schema } from "mongoose";
import { Kindergarden } from "./Kindergarden.models";
import { Nanny } from "./Nanny.model";
import { Parent } from "./Parent.models";

export interface Match extends Document {
  nannyId: Nanny["_id"];
  kindergardenId: Kindergarden["_id"];
  parentId: Parent["_id"];
  totalprice: Number;
  hasContacted: Boolean;
  hasbooked: Boolean;
}

const schema = new Schema({
  nannyId: { type: Schema.Types.ObjectId, ref: "Nanny" },
  kindergardenId: { type: Schema.Types.ObjectId, ref: "Kindergarden" },
  parentId: { type: Schema.Types.ObjectId, ref: "Parents" },

  //a las niñeras les aparecera 5€/h y en las gaurderias 100€/month
  totalprice: { type: Number, require: true },
  hasContacted: { type: Boolean },
  hasbooked: { type: Boolean },
});

export const Match = mongoose.model<Match>("Match", schema);
