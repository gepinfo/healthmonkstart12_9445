import { Request, Response } from 'express';
import { adminentityService } from '../service/adminentityService';
import { CustomLogger } from '../config/Logger'
let adminentity = new adminentityService();

export class adminentityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
adminentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
adminentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
adminentity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
adminentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
adminentity.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
adminentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
adminentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into adminentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from adminentityController.ts: GpCreate');
    })}


}