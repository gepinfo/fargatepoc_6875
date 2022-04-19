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
        app.route('/studentdata/:id').delete(this.studentdata.GpDelete);
app.route('/studentdata/get/search').get(this.studentdata.GpSearch);
app.route('/studentdata/get/update').put(this.studentdata.GpSearchForUpdate);
app.route('/studentdata').put(this.studentdata.GpUpdate);
app.route('/studentdata/:id').get(this.studentdata.GpGetNounById);
app.route('/studentdata').get(this.studentdata.GpGetAllValues);
app.route('/studentdata').post(this.studentdata.GpCreate);
     }

}