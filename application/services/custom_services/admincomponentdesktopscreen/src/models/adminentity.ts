
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const adminentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Enter_Name: String
})

const adminentityModel = mongoose.model('adminentity', adminentitySchema, 'adminentity');
export default adminentityModel;
