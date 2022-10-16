import { connection } from "../connection/connection.js";

const getRanking= async (req,res)=>{

    try{
        const response= (await connection.query(`
        SELECT users.id,users.name, COUNT(urls."idUser")AS "linksCount", 
        SUM(visitors.visit) AS "visitCount" FROM visitors
        JOIN urls ON urls.id=visitors."idUrl"
        JOIN users ON users.id=urls."idUser"
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10
        `)).rows;
        return res.send(response);
    }catch(err){
        return res.status(500).send(err.message);
    }

};

export {getRanking};