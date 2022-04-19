import * as mongoose from 'mongoose';
import collegedataModel from '../models/collegedata';
import { CustomLogger } from '../config/Logger'


export class collegedataDao {
    private collegedata = collegedataModel;
    constructor() { }
    
    public async GpCreate(collegedataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into collegedataDao.ts: GpCreate');

    let temp = new collegedataModel(collegedataData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from collegedataDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}