import { connection } from "../connection/connection.js";
import {joiPasswordExtendCore} from "joi-password"
import joi from "joi";
import bcrypt from "bcrypt";

const joiPassword = joi.extend(joiPasswordExtendCore);

const emailSchema= joiPassword.string().noWhiteSpaces().required().min(2);
const passwordSchema= joi.string().required().min(2);

const postSignIn=async (req,res)=>{
    const {email,password}=req.body;

    if(!email || !password ){
        return res.status(422).send({format:`the fields must come in the format: {email,password}`,
        message: `no fields must be empty`});
    }
    let validation= emailSchema.validate(email);
    if(validation.error){
        return res.status(422).send({message: validation.error.details[0].message});
    }
    validation= passwordSchema.validate(password);
    if(validation.error){
        return res.status(422).send({message: validation.error.details[0].message});
    }

    try{
        const response= (await connection.query(`SELECT * FROM users`)).rows;
        const user= response.filter((e)=>{
            if(e.email===email){
                return e
            }
        });   
        if(!user[0]){
            return res.status(401).send({message:`Unauthorized`})
        }
        const passwordToken=user[0].password;
        const passwordValid= bcrypt.compareSync(password,passwordToken);
        if(!passwordValid){
            return res.status(401).send({message:`Unauthorized`})
        }

        const token = bcrypt.hashSync(password, 13 );
    return res.status(200).send({token});

    }catch(error){
        return res.status(500).send(error);
    }
};
export {postSignIn};