import express from "express";
import { router } from "./routes/routers.js";

const server=express();
server.use(express.json());

server.use(router);

server.listen(4000,()=>{
    console.log("escutando porta 4000");
});