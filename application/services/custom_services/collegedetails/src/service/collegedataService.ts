import { Request, Response } from 'express';
import {collegedataDao} from '../dao/collegedataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let collegedata = new collegedataDao();

export class collegedataService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegedataService.ts: GpCreate')
     let  collegedataData = req.body;
     collegedata.GpCreate(collegedataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegedataService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}