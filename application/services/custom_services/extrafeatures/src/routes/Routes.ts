import { Request, Response, NextFunction } from "express";
import { extradetailsController } from '../controller/extradetailsController';


export class Routes {
    private extradetails: extradetailsController = new extradetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/extradetails/:id').delete(this.extradetails.GpDelete);
app.route('/extradetails/get/search').get(this.extradetails.GpSearch);
app.route('/extradetails/get/update').put(this.extradetails.GpSearchForUpdate);
app.route('/extradetails').put(this.extradetails.GpUpdate);
app.route('/extradetails/:id').get(this.extradetails.GpGetNounById);
app.route('/extradetails').get(this.extradetails.GpGetAllValues);
app.route('/extradetails').post(this.extradetails.GpCreate);
     }

}