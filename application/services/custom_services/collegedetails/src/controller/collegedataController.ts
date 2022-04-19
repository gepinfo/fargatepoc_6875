import { Request, Response } from 'express';
import { collegedataService } from '../service/collegedataService';
import { CustomLogger } from '../config/Logger'
let collegedata = new collegedataService();

export class collegedataController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
collegedata.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegedataController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegedataController.ts: GpCreate');
    })}


}