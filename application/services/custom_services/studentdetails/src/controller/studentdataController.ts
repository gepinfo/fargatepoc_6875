import { Request, Response } from 'express';
import { studentdataService } from '../service/studentdataService';
import { CustomLogger } from '../config/Logger'
let studentdata = new studentdataService();

export class studentdataController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
studentdata.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
studentdata.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
studentdata.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
studentdata.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
studentdata.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
studentdata.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
studentdata.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpCreate');
    })}


}