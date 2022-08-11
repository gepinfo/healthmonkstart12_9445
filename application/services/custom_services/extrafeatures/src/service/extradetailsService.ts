import { Request, Response } from 'express';
import {extradetailsDao} from '../dao/extradetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let extradetails = new extradetailsDao();

export class extradetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpDelete')
     let  extradetailsId = req.params.id;
     extradetails.GpDelete(extradetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpSearch')
     let  extradetailsData = req.query;
     extradetails.GpSearch(extradetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpSearchForUpdate')
     let  extradetailsData = req.body;
     extradetails.GpSearchForUpdate(extradetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpUpdate')
     let  extradetailsData = req.body;
     extradetails.GpUpdate(extradetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpGetNounById')
     let  extradetailsId = req.params.id;
     extradetails.GpGetNounById(extradetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpGetAllValues')
     
     extradetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into extradetailsService.ts: GpCreate')
     let  extradetailsData = req.body;
     extradetails.GpCreate(extradetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from extradetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}