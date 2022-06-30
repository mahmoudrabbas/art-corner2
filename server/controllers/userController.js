import mongoose from 'mongoose'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = async (req,res) => {
    const {fullName,email,password,number,address,account_type} = req.body

    const isFound = await User.findOne({email})
    if(isFound) return res.send({message:`Email is already exist`})

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = await new User({
        fullName,
        email,
        number,
        account_type,
        address,
        password:hashPassword,
    })


    try {
        const user = await newUser.save();
        res.json({user})

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const login = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) return res.json({message:'Invalid email or password'})
        const isPassword = await bcrypt.compare(password,user.password)
        if(!isPassword) return res.send({message:'Invalid email or password'})


        const token = jwt.sign({id:user._id}, 'mahmoudrabbas')

        res.status(200).json({ user, token})
    } catch (error) {
        res.status(500).send({message:"Server Error"})
    }

}

export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find();
        if(!users) return res.json({message: "There is no user"})
        res.json(users)
        
    } catch (error) {
        res.json({message:"Server Error"})
    }
}

export const getUser = async (req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(!user) return res.json({message: "User Not Found"})
        res.json(user)
    } catch (error) {
        res.json({message:"Server Error"})
    }
}

export const settings = async (req,res) => {
    const {id} = req.params;
    const {fullName, email, address, number, bio, profile_picture} = req.body;
    try {
        const user = await User.findById(id);
        if(!user) return res.json({message: "User Not Found"})
        const updateProfile = {...req.body, _id:id};
        const newProfile = await User.findByIdAndUpdate(id, updateProfile, {new:true})
        res.json(newProfile);
    } catch (error) {
        res.json({message:"Server Error"})
    }
}



