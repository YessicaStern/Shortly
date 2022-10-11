import { connection } from "../connection/connection.js";
import {joiPasswordExtendCore} from "joi-password"
import joi from "joi";

const joiPassword = joi.extend(joiPasswordExtendCore);

const nameSchema = joi.string().required().min(2).max(250);
const emailSchema= joiPassword.string().noWhiteSpaces().required().min(2);
const passwordSchema= joi.string().required().min(2);

const postSignUp= async(req,res)=>{
    const {name,email,password,confirmPassword}=req.body;

    if(!name  || !email || !password || !confirmPassword){
        return res.status(422).send({format:`the fields must come in the format: {name,email,password,confirmPassword}`,
        message: `no fields must be empty`});
    }
    let validation= nameSchema.validate(name);
    if(validation.error){
        return res.status(422).send({message: validation.error.details[0].message});
    }
    validation= emailSchema.validate(email);
    if(validation.error){
        return res.status(422).send({message: validation.error.details[0].message});
    }
    validation= passwordSchema.validate(password);
    if(validation.error){
        return res.status(422).send({message: validation.error.details[0].message});
    }if(password!=confirmPassword){
        return res.status(422).send({message:`password diverge`})
    }

    try{
        const response = (await connection.query(`SELECT * FROM users`)).rows;
        const emailValid=response.filter((e)=>{
            if(e.email===email){
                return e;
            }
        });
        if(emailValid[0]){
            return res.status(409).send({message: `e-mail already registered`});
        };
        connection.query(`INSERT INTO users (name,email,password) VALUES ($1,$2,$3)`,[String(name),String(email),String(password)]);
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err);
    }
};
export {postSignUp};