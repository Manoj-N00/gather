import { Router } from "express";
import { adminMiddleware } from "../../middleware/admin";
import client from "@repo/db/client";
import { createElementSchema, updateElementSchema } from "../../types";

export const adminRouter=Router();


adminRouter.post("/element",adminMiddleware,async(req,res)=>{    
   const parsedData = createElementSchema.safeParse(req.body)
   if(!parsedData.success){
       res.status(400).json({message:"validation failed"})
       return
   }
  const element= await client.element.create({
    data:{
        width:parsedData.data.width,
        height:parsedData.data.height,
        imageUrl:parsedData.data.imageUrl,
        static:parsedData.data.static,
    }
   })
   res.json({
       id:element.id
   })
})
adminRouter.put("/element/:elementId",adminMiddleware,async(req,res)=>{    
 const parsedData= updateElementSchema.safeParse(req.body)
 if(!parsedData.success){
     res.status(400).json({message:"validation failed"})
     return
 }
 await client.element.update({
    where:{
        id:req.params.elementId
    },
    data:{
        imageUrl:parsedData.data.imageUrl
    }
 })
 res.json({message:"Element upadted"})
})
adminRouter.post("/avatar",adminMiddleware,async(req,res)=>{    

})
adminRouter.post("/map",adminMiddleware,async(req,res)=>{    

})