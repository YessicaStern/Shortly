import express from 'express';
import { postSignIn } from '../controllers/signin.controllers.js';
import { postSignUp } from '../controllers/signup.controllers.js';
import { postUrl } from '../controllers/url.controllers.js';

const router= express.Router();

router.post("/signup",postSignUp);
router.post("/signin",postSignIn);
router.post("/urls/shorten",postUrl)

export {router};