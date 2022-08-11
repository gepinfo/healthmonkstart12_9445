import * as mongoose from 'mongoose';
import extradetailsModel from '../models/extradetails';
import { CustomLogger } from '../config/Logger'


export class extradetailsDao {
    private extradetails = extradetailsModel;
    constructor() { }
    
    public async GpDelete(extradetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpDelete');

    

    
    
    
    this.extradetails.findByIdAndRemove(extradetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(extradetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(extradetailsData).forEach(
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
    this.extradetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(extradetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.extradetails.findOneAndUpdate({ _id: extradetailsData._id }, extradetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(extradetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpUpdate');

    

    
    
    
    this.extradetails.findOneAndUpdate({ _id: extradetailsData._id }, extradetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(extradetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpGetNounById');

    

    
    
    
    this.extradetails.findById(extradetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.extradetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(extradetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into extradetailsDao.ts: GpCreate');

    let temp = new extradetailsModel(extradetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from extradetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}