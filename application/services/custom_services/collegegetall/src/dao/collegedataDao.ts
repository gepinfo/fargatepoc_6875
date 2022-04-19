import * as mongoose from 'mongoose';
import collegedataModel from '../models/collegedata';
import { CustomLogger } from '../config/Logger'


export class collegedataDao {
    private collegedata = collegedataModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into collegedataDao.ts: GpGetAllValues');

    

    
    
    
    this.collegedata.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from collegedataDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}