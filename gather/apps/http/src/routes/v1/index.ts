import { Router } from "express";
import { userRouter } from "./user";
import { adminRouter } from "./admin";
import { spaceRouter } from "./space";
import { SignupSchema } from "../../middleware/admin";
import client from "@repo/db/client";

 export const router =Router();

 router.post("/signup",async(req,res)=>{
    const parsedData = SignupSchema.safeParse(req.body);
    if(!parsedData.success){
         res.status(400).json({
            message :"Validation failed"
        })
        return
    }
    try{
     const user = await client.user.create({
            data:{
                username:parsedData.data.username,
                password:parsedData.data.password,
                role:parsedData.data.type==="admin"?"Admin":"User"
            }
        })
        res.json({
           userId:user.id
        })

    }catch(e){
        res.status(400).json({
            message:"User already exists"
        })

    }
 }
)
 router.post("/signin",(req,res)=>{
    res.json({
        message:"signin"
    })

 })

 router.get("/elements",(req,res)=>{
    res.json({
        message:"elements"
    })
 })
 router.get("/avatars",(req,res)=>{
    res.json({
        message:"avatas"
    })
 })

 router.use("/user",userRouter);
 router.use("/space",spaceRouter);
 router.use("/admin",adminRouter);