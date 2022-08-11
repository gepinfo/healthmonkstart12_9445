import { Request, Response, NextFunction } from "express";
import { adminentityController } from '../controller/adminentityController';


export class Routes {
    private adminentity: adminentityController = new adminentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/adminentity/:id').delete(this.adminentity.GpDelete);
app.route('/adminentity/get/search').get(this.adminentity.GpSearch);
app.route('/adminentity/get/update').put(this.adminentity.GpSearchForUpdate);
app.route('/adminentity').put(this.adminentity.GpUpdate);
app.route('/adminentity/:id').get(this.adminentity.GpGetNounById);
app.route('/adminentity').get(this.adminentity.GpGetAllValues);
app.route('/adminentity').post(this.adminentity.GpCreate);
     }

}