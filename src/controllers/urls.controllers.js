import { connection } from "../connection/connection.js";
import { nanoid } from 'nanoid'
import  {URL} from "url";

const postUrl= async (req,res)=>{
    const token=req.headers.authorization?.replace("Bearer ","");
    const {url}=req.body;
    if(!url){
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
        const idUser= session[0].idUser;
        const urlValid= new URL(url);
        if(urlValid.protocol === "https:" || urlValid.protocol === "http:"){
            const shortUrl = nanoid();
            await connection.query(`INSERT INTO urls (url,"shortUrl","idUser") VALUES ($1,$2,$3)`
            ,[url,shortUrl,idUser]);

            const urlObject =(await connection.query(`SELECT * FROM urls WHERE "shortUrl"=$1`,[shortUrl])).rows;
            const idUrl=urlObject[0].id;
            await connection.query(`INSERT INTO visitors ("idUrl") VALUES ($1)`,[idUrl]);

            return res.status(201).send({shortUrl});
        }
        return res.sendStatus(422);
    }catch(err){
        return res.status(500).send(err.message);
    }; 
};


const getUrlId=async(req,res)=>{
    const {idUrl}=req.params;
    try{
        const urls=(await connection.query(`SELECT * FROM urls`)).rows;
        const url= urls.filter((e)=>{
            if(e.id===Number(idUrl)){
                return e;
            };
        });
        if(url[0]){
            return res.status(200).send(url);
        };
        return res.sendStatus(404);
    }catch(err){
        return res.status(500).send(err.message);
    };
};


//conferir o redirect
const getOpenShortUrl= async (req,res)=>{
    const {shortUrl}=req.params;
    try{
        const urls=(await connection.query(`SELECT * FROM urls`)).rows;
        const urlObject=urls.filter((e)=>{
            if(e.shortUrl===shortUrl){
                return e;
            };
        });
        if(!urlObject[0]){
            return res.sendStatus(404);
        };
        const idUrl=urlObject[0].id;
        const url=urlObject[0].url;
        const visits = (await connection.query(`SELECT * FROM visitors`)).rows;
        const visitObject= visits.filter((e)=>{
            if(e.idUrl===idUrl){
                return e;
            };
        });
        let visit=visitObject[0].visit;
        visit+=1;
        await connection.query(`UPDATE visitors SET visit=$1 WHERE "idUrl"=$2`,[visit,idUrl]);
        return res.redirect(url);
    }catch(err){
        return res.status(500).send(err.message);
    };
};


const deleteUrl= async (req,res)=>{
    const token=req.headers.authorization?.replace("Bearer ","");
    const {idUrl}=req.params;
    try{
        const sessions=(await connection.query(`SELECT * FROM sessions`)).rows;
        const session= sessions.filter((e)=>{
            if(e.session===token){
                return e;
            };
        });
        const idUser= session[0].idUser;
        
        const urls=(await connection.query(`SELECT * FROM urls`)).rows;
        const url=urls.filter((e)=>{
            if(e.id===Number(idUrl)){
                return e;
            };
        });
        if(!url[0]){
            return res.sendStatus(404);
        };
        if(url[0].idUser===idUser){
            await connection.query(`DELETE FROM urls WHERE id=$1`,[idUrl]);
            return res.sendStatus(200);
        };
        return res.sendStatus(401);
    }catch(err){
        return res.status(500).send(err.message);
    };
};


export {postUrl,getUrlId,getOpenShortUrl,deleteUrl};