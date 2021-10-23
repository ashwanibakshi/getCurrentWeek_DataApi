const demoDB = require("../db/demoDb");

module.exports.showData=(req,res)=>{
    demoDB.getData()
    .then((data)=>{
        res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}

module.exports.addData=(req,res)=>{
       demoDB.addData(req.body)
       .then((data)=>{
          res.json({data:data,msg:"success"});
       })
       .catch((err)=>{
          res.json({error:err.message});
       })
}

