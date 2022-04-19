import { Request, Response } from 'express';
import {studentdataDao} from '../dao/studentdataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let studentdata = new studentdataDao();

export class studentdataService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpGetAllValues')
     
     studentdata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}