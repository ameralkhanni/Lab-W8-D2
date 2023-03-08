import express from "express";
import { createTask, delateTask, getTask, updateTask } from "../controller/task.controller";
import validate from "../middleware/validate";
import auth from "../middleware/auth";

import { taskVaild } from "../zod.schema/task.zod";

let router =express.Router();

router.post('/',auth,validate(taskVaild),createTask);
router.get('/',auth,getTask);
router.put('/:id',auth,updateTask);
router.delete('/:id',auth,delateTask);
export default router;