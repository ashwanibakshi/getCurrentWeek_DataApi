const express   = require("express");
const mongo     = require("mongoose");
const { allowedNodeEnvironmentFlags } = require("process");


const app = express();

mongo.connect("mongodb://localhost:27017/week")
.then(()=>console.log("connected to db"))
.catch((err)=>console.log("db connection error",err))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1',require("./routes/demoApiRoutes"));

const port  = process.env.PORT || 3000

app.listen(port,()=>console.log(`server run at port ${port}`));