const demoModel     = require("../models/demoModel");
const moment        = require("moment");

var weekStart = moment().subtract(0,'week').startOf('isoWeek').format('YYYY-MM-DD');
var weekEnd   = moment().subtract(0,'week').endOf('isoWeek').format('YYYY-MM-DD');

console.log(weekStart,weekEnd)

module.exports.getData=()=>{
    return new Promise((resolve,reject)=>{
          try {
             demoModel.find({'createdAt':{ $gte: new Date(weekStart), $lte:new Date(weekEnd)}},(err,sdata)=>{
                    if(err){
                        reject(err);
                    }
                    else if(sdata.length){
                        resolve(sdata);
                    }
                    else{
                       reject({message:"no data found"});
                    }
             });               
          } catch (error) {
              reject(error);
          }
    });
}

module.exports.addData=(data)=>{
    return new Promise((resolve,reject)=>{
         try {
             
            let demoo = new demoModel({
                name  : data.name,
             address  : data.address,
            createdAt : Date.now()
             });
            demoo.save((err,adata)=>{
               if(err){
                   reject(err);
               }
               else if(adata){
                  resolve(adata);
               }
               else{
                  reject({message:"no data found"});
               }
            });
         } catch (error) {
             reject(error);
         }
    });
}