import * as mongoose from 'mongoose';
import studentdataModel from '../models/studentdata';
import { CustomLogger } from '../config/Logger'


export class studentdataDao {
    private studentdata = studentdataModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdataDao.ts: GpGetAllValues');

    

    
    
    
    this.studentdata.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdataDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}