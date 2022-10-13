import { connection } from "../connection/connection.js";
import { nanoid } from 'nanoid'
import  {URL} from "url";

const postUrl= async (req,res)=>{
    const token=req.headers.authorization?.replace("Bearer ","");
    const {url}=req.body;
    if(!token || !url){
        return res.status(422).send({
            format: `the fields must come in the format: {url}`,
            message:"no fields must be empty" });
    };
    try{
        const sessions=(await connection.query(`SELECT * FROM sessions`)).rows;
        const session= sessions.filter((e)=>{
            if(e.session===token){
                return e;
            };
        });
        if(session[0].session===token){
            const urlValid= new URL(url);
            if(urlValid.protocol === "https:" || urlValid.protocol === "http:"){
                const urlShort = nanoid();
                return res.status(201).send({shortUrl:urlShort});
            }
            return res.sendStatus(422);
        }
        return res.sendStatus(401);

    }catch(err){
        return res.status(500).send(err);
    }; 
};

export {postUrl};