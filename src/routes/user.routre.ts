import express from "express";
import{login, create} from '../controller/user.controller'
// import validate from "../middleware/validate";

// import { loginUser,  } from "../zod.schema/user.zod";

let router =express.Router();

router.post('/',create)
router.post('/login',login)


export default router;
