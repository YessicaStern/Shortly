import { connection } from "../connection/connection.js";
                                                                                                                                                         
const getUsers= async (req,res)=>{
    const token=req.headers.authorization?.replace("Bearer ","");
    try{
        const sessions=(await connection.query(`SELECT * FROM sessions`)).rows;
        const session= sessions.filter((e)=>{
            if(e.session===token){
                return e;
            };
        });
        const idUser= session[0].idUser;
        const name=(await connection.query(`SELECT name FROM users WHERE id=$1`,[idUser])).rows;
        if(!name[0]){
            return res.sendStatus(404);
        }
        const shortenedUrls =(await connection.query(`
        SELECT urls.id, urls.url,urls."shortUrl", visitors.visit AS "visitCount" FROM visitors
        JOIN urls ON urls.id=visitors."idUrl" WHERE "idUser"=$1`,[idUser])).rows;

        const visitCount =(await connection.query(`SELECT SUM(visitors.visit) AS "visitCount" FROM urls 
        JOIN visitors ON visitors."idUrl"=urls.id WHERE urls."idUser"=$1`,[idUser])).rows;

        const response={
            id:idUser,
            name: name[0].name,
            visitCount: visitCount[0].visitCount,
            shortenedUrls
        }
        return res.status(200).send(response);
    }catch(err){
        return res.status(500).send(err.message);
    }
};

export{getUsers};