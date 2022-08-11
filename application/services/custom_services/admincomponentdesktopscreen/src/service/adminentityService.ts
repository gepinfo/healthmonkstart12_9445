import { Request, Response } from 'express';
import {adminentityDao} from '../dao/adminentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let adminentity = new adminentityDao();

export class adminentityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpDelete')
     let  adminentityId = req.params.id;
     adminentity.GpDelete(adminentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpSearch')
     let  adminentityData = req.query;
     adminentity.GpSearch(adminentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpSearchForUpdate')
     let  adminentityData = req.body;
     adminentity.GpSearchForUpdate(adminentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpUpdate')
     let  adminentityData = req.body;
     adminentity.GpUpdate(adminentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpGetNounById')
     let  adminentityId = req.params.id;
     adminentity.GpGetNounById(adminentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpGetAllValues')
     
     adminentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into adminentityService.ts: GpCreate')
     let  adminentityData = req.body;
     adminentity.GpCreate(adminentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from adminentityService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}