
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const collegedataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   rollno: String,
   name: String,
   email: String,
   age: String
})

const collegedataModel = mongoose.model('collegedata', collegedataSchema, 'collegedata');
export default collegedataModel;
