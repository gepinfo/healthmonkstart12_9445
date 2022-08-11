
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const extradetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   persondaily_progress: String
})

const extradetailsModel = mongoose.model('extradetails', extradetailsSchema, 'extradetails');
export default extradetailsModel;
