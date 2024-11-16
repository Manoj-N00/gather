import { Router } from "express";
import { adminMiddleware } from "../../middleware/admin";

export const adminRouter=Router();


adminRouter.post("/element",adminMiddleware,async(req,res)=>{    

})
adminRouter.put("/element/:elementId",adminMiddleware,async(req,res)=>{    

})
adminRouter.get("/avatar",adminMiddleware,async(req,res)=>{    

})
adminRouter.get("/map",adminMiddleware,async(req,res)=>{    

})