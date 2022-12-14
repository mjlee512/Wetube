import express from "express";
import {
    getEdit,
    postEdit,
    seeUser,
    logout,
    startGithubLogin, 
    finishGithubLogin} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddlewware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddlewware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddlewware, finishGithubLogin);
userRouter.get(":id", seeUser);

export default userRouter;