import prisma from '../config/db';

import {Request,Response} from "express";

export const createTask= async(req:Request,res:Response)=>{
    try {
        let task = await prisma.task.create({
            data:{
                title: req.body.title,
                userId: res.locals.user.id
            }
        });
        if(task){
            return res.status(200).json({"msg":"task created successfully","task":task});
        }
        throw("there was an error creating, please try again");
    } catch (error) {
        res.status(500).json({"Error":error});
    }
    };
    export const getTask=  async(req:Request,res:Response)=>{
        try {
            let tasks = await prisma.task.findMany({
                where:{
                    userId: res.locals.user.id
                },
                
                
            });
            if(tasks){
                return res.status(200).json(tasks);
            }
        } catch (error) {
            res.status(500).json({"Error":error});
        }
        };


      export const updateTask= async(req:Request,res:Response)=>{
        try {
            const task = await prisma.task.updateMany({
                  where:{
                    id:req.params.id,
                    userId:res.locals.user.id
                  },
    
                data: {
                    title: req.body.title,
                    isCompleted: req.body.isCompleted,
    
                }
            });
            if (task.count==0) {
                throw("no record updated")
            }
            res.status(200).json({ "msg": "The Task Updated", task })
    
        }
        catch (error) {
            res.status(500).json(error)
    
        }
    };

    export const delateTask= async(req:Request,res:Response)=>{
        try {
            const task = await prisma.task.deleteMany({
                  where:{
                    id: req.params.id,
                    userId:res.locals.user.id
                  }
            });
            if (task.count==0) {
                throw("no record deleted");
            }
            res.status(200).json({ "msg": "The Task deleted", task })
    
        }
        catch (error) {
            res.status(500).json(error)
    
        }
    };
