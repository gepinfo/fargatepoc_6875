import { Request, Response } from 'express';
import {studentdataDao} from '../dao/studentdataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let studentdata = new studentdataDao();

export class studentdataService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpDelete')
     let  studentdataId = req.params.id;
     studentdata.GpDelete(studentdataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpSearch')
     let  studentdataData = req.query;
     studentdata.GpSearch(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpSearchForUpdate')
     let  studentdataData = req.body;
     studentdata.GpSearchForUpdate(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpUpdate')
     let  studentdataData = req.body;
     studentdata.GpUpdate(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpGetNounById')
     let  studentdataId = req.params.id;
     studentdata.GpGetNounById(studentdataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpGetAllValues')
     
     studentdata.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdataService.ts: GpCreate')
     let  studentdataData = req.body;
     studentdata.GpCreate(studentdataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdataService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}