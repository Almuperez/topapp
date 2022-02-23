import mongoose, { Document, Schema } from "mongoose";


//añadir parametro contacto
//name del niño
//auth0

export interface Parents extends Document {
  children: [] 
  location: String;
  phone: Number;
  otherInformation: String;
  
 
  
}

const schema = new Schema({
  children: { type: Number, require: true },
  location: { type: String, required: true },
  otherInformation: String;
  
 
});

export const Parents = mongoose.model<Parents>("Parents", schema);
