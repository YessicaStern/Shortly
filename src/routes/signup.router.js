import express from 'express';
import { postSignUp } from '../controllers/signup.controllers.js';

const signupRouter= express.Router();

signupRouter.post("/signup",postSignUp);

export {signupRouter};