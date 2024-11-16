import jwt from "jsonwebtoken";
  import { JWT_PASSWORD } from "../config";
  import { NextFunction, Request, Response } from "express";
export const adminMiddleware =  async (req:Request,res:Response,next:NextFunction)=>{
    const header = req.headers.authorization
    const token = header?.split(" ")[1]

    if(!token){
        res.status(403).json({
            message:"Invalid token"
        })
        return
    }
    try{ 
        const decoded = jwt.verify(token,JWT_PASSWORD) as {role:string,userId:string}
        if(decoded.role!=="Admin"){
            res.status(403).json({
                message:"Invalid token"
            })
            return
        }
        req.userId=decoded.userId
        next()
    }catch(e){
        res.status(401).json({
            message:"Invalid token"
        })
    }
        
}
