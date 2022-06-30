import mongoose from 'mongoose'
import Order from '../models/orderModel.js'


export const getOrders = async (req,res) => {
    try {
        const orders = await Order.find();
        if(!orders) return res.send("There is no order")
        res.json(orders)

    } catch (error) {
        res.send({ message:"Server Error" })
    }    
}

export const getOrder = async (req,res) => {
    const {id} = req.params

    try {
        const order = await Order.findById(id);
        if(!order) return res.send("Order is not found")

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const makeOrder = async (req,res) => {
    
    const newOrder = await new Order({ ...req.body })
    // console.log(newOrder)

    try {
        const order = await newOrder.save();
        console.log(order)
        res.json(order)
    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const accept = async (req,res) => {
    const {id} = useParams;
    const order = await Order.findById(id);
    try {
        const acceptedOrder = await Order.findByIdAndUpdate(id, {...order, _id:id, processing: "accepted"}, {new: true});
        res.json(acceptedOrder)
    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const reject = async (req,res) => {
    const {id} = useParams;
    const order = await Order.findById(id);
    try {
        const rejectedOrder = await Order.findByIdAndUpdate(id, {...order, _id:id, processing: "rejected"}, {new: true});
        res.json(rejectedOrder)
    } catch (error) {
        res.send({message:"Server Error"})
    }    
}




export const deleteOrder = async (req,res) => {
    const {id} = req.params;

    try {
        const order = await Order.findByIdAndDelete(id);
        res.json(order);
    } catch (error) {
        res.send({message:"Server Error"})
    }
}


