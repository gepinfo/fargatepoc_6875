import { Request, Response, NextFunction } from "express";
import { collegedataController } from '../controller/collegedataController';


export class Routes {
    private collegedata: collegedataController = new collegedataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/collegedata').get(this.collegedata.GpGetAllValues);
     }

}