const express = require("express");
const {json} = require("express");
const routes = require("./Routes/route")
const connectDB = require("./database/connection")

connectDB();
const app = express();

app.use(json());

app.use("/",routes);
const port = process.env.PORT || 5050;

app.listen(port,()=>{
    console.log(`server is up and running...`);
});