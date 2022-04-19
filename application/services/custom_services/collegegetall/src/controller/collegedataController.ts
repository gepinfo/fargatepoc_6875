import { Request, Response } from 'express';
import { collegedataService } from '../service/collegedataService';
import { CustomLogger } from '../config/Logger'
let collegedata = new collegedataService();

export class collegedataController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
collegedata.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegedataController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegedataController.ts: GpGetAllValues');
    })}


}