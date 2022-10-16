import { connection } from "../connection/connection.js";

const authorization= async(req,res,next)=>{
    const token=req.headers.authorization?.replace("Bearer ","");
    if(!token){
        return res.sendStatus(401);
    };
    try{
        const sessions=(await connection.query(`SELECT * FROM sessions`)).rows;
        const session= sessions.filter((e)=>{
            if(e.session===token){
                return e;
            };
        });
        if(!session[0]){
            return res.sendStatus(401);
        };
        next();
    }catch(err){
        res.status(500).send(err);
    }
}
export {authorization};