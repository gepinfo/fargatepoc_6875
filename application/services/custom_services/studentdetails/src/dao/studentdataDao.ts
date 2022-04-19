import * as mongoose from 'mongoose';
import studentdataModel from '../models/studentdata';
import { CustomLogger } from '../config/Logger'


export class studentdataDao {
    private studentdata = studentdataModel;
    constructor() { }
    
    public async GpDelete(studentdataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpDelete');

    

    
    
    
    this.studentdata.findByIdAndRemove(studentdataId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(studentdataData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.studentdata.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpSearchForUpdate');

    

    
    
    
    this.studentdata.findOneAndUpdate({ _id: studentdataData._id }, studentdataData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpUpdate');

    

    
    
    
    this.studentdata.findOneAndUpdate({ _id: studentdataData._id }, studentdataData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(studentdataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpGetNounById');

    

    
    
    
    this.studentdata.findById(studentdataId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpGetAllValues');

    

    
    
    
    this.studentdata.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(studentdataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpCreate');

    let temp = new studentdataModel(studentdataData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}