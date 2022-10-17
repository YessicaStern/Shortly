import express from "express";
import cors from "cors";
import { router } from "./routes/routers.js";
import dotenv from "dotenv";

dotenv.config();

const server=express();
server.use(express.json());
server.use(cors());
server.use(router);


server.listen(process.env.PORT,()=>{
    console.log(`escutando porta ${process.env.PORT}`);
});