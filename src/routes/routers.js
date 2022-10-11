import express from 'express';
import { postSignIn } from '../controllers/signin.controllers.js';
import { postSignUp } from '../controllers/signup.controllers.js';

const router= express.Router();

router.post("/signup",postSignUp);
router.post("/signin",postSignIn);

export {router};