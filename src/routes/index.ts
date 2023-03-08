import express  from "express";
import userRoute from'./user.routre'
import taskRoute from'./task.routre'
let router =express.Router();

router.use('/users',userRoute);
router.use('/task',taskRoute);
export default router;