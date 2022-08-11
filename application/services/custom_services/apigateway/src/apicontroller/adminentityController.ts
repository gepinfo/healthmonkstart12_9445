import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class adminentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/adminentity/:id', this.GpDelete);
this.router.get('/adminentity/get/search', this.GpSearch);
this.router.put('/adminentity/get/update', this.GpSearchForUpdate);
this.router.put('/adminentity', this.GpUpdate);
this.router.get('/adminentity/:id', this.GpGetNounById);
this.router.get('/adminentity', this.GpGetAllValues);
this.router.post('/adminentity', this.GpCreate);
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpDelete');
        new ApiAdapter().delete(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpSearch');
        new ApiAdapter().get(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpUpdate');
        new ApiAdapter().put(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpCreate');
        new ApiAdapter().post(Constant.ADMINCOMPONENTDESKTOPSCREENURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

