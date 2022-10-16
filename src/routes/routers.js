import express from 'express';
import { getRanking } from '../controllers/ranking.controllers.js';
import { postSignIn } from '../controllers/signin.controllers.js';
import { postSignUp } from '../controllers/signup.controllers.js';
import { deleteUrl, getOpenShortUrl, getUrlId, postUrl } from '../controllers/urls.controllers.js';
import { getUsers } from '../controllers/users.controllers.js';
import { authorization } from '../middlewares/middlewares.js';

const router= express.Router();

router.post("/signup",postSignUp);
router.post("/signin",postSignIn);
router.post("/urls/shorten",authorization,postUrl);
router.get("/urls/:idUrl",getUrlId);
router.get("/urls/open/:shortUrl",getOpenShortUrl);
router.delete("/urls/:idUrl",authorization,deleteUrl);
router.get("/users/me",authorization,getUsers);
router.get("/ranking",getRanking)

export {router};