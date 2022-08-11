import { Request, Response } from 'express';
import { extradetailsService } from '../service/extradetailsService';
import { CustomLogger } from '../config/Logger'
let extradetails = new extradetailsService();

export class extradetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
extradetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
extradetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
extradetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
extradetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
extradetails.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
extradetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
extradetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into extradetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from extradetailsController.ts: GpCreate');
    })}


}