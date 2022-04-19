import { Request, Response, NextFunction } from "express";
import { studentdataController } from '../controller/studentdataController';


export class Routes {
    private studentdata: studentdataController = new studentdataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentdata').get(this.studentdata.GpGetAllValues);
     }

}