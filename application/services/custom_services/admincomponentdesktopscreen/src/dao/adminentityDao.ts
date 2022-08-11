import * as mongoose from 'mongoose';
import adminentityModel from '../models/adminentity';
import { CustomLogger } from '../config/Logger'


export class adminentityDao {
    private adminentity = adminentityModel;
    constructor() { }
    
    public async GpDelete(adminentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpDelete');

    

    
    
    
    this.adminentity.findByIdAndRemove(adminentityId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(adminentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(adminentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.adminentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(adminentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.adminentity.findOneAndUpdate({ _id: adminentityData._id }, adminentityData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(adminentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpUpdate');

    

    
    
    
    this.adminentity.findOneAndUpdate({ _id: adminentityData._id }, adminentityData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(adminentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpGetNounById');

    

    
    
    
    this.adminentity.findById(adminentityId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpGetAllValues');

    

    
    
    
    this.adminentity.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(adminentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into adminentityDao.ts: GpCreate');

    let temp = new adminentityModel(adminentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from adminentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}