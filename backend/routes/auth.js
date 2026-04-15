import express from 'express';
import jwt from "jsonwebtoken"
import User from '../models/User'

const router = express.Router();

router.post('/signup', async(req,res)=>{
    try{
        const {email,password,username}=req.body;
        
        const existingUser = await User.findOne({$or:[{email},{username}]})

        if (existingUser){
            return res.status(400).json({error:"user already exist"});
        }
    }
    catch(error){

    }

})

