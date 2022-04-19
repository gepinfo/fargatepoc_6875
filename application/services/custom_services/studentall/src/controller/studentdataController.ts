import { Request, Response } from 'express';
import { studentdataService } from '../service/studentdataService';
import { CustomLogger } from '../config/Logger'
let studentdata = new studentdataService();

export class studentdataController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
studentdata.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdataController.ts: GpGetAllValues');
    })}


}