import express from "express";
import cors from "cors";
import { router } from "./routes/routers.js";

const server=express();
server.use(express.json());
server.use(cors());
server.use(router);

server.listen(4000,()=>{
    console.log("escutando porta 4000");
});