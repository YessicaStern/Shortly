import express from "express";
import { signupRouter } from "./routes/signup.router.js";

const server=express();
server.use(express.json());

server.use(signupRouter);

server.listen(4000,()=>{
    console.log("escutando porta 4000");
});