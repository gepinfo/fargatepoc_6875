import { Request, Response } from 'express';
import {collegedataDao} from '../dao/collegedataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let collegedata = new collegedataDao();

export class collegedataService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegedataService.ts: GpGetAllValues')
     
     collegedata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegedataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}