import Product from '../models/productModel.js'


export const getAllProducts = async (req,res) => {
    const {id} = req.params;
    try {
        const products = await Product.find({ clientId: id });
        if(!products) return res.send("There is no products")
        res.json(products)

    } catch (error) {
        res.send({message:"Server Error on get"})
    }    
}


export const addProduct = async (req,res) => {
    const newProduct = await new Product({ ...req.body })
    try {
        const product = await newProduct.save();
        res.json(product)

    } catch (error) {
        res.send({message:"Server Error on add"})
    }    
}


export const deleteProduct = async (req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        res.json(product);
    } catch (error) {
        res.send({message:"Server Error on delete"})
    }
}


export const deleteAllProducts = async (req,res) => {
    const {id} = req.params;
    try {
        const products = await Product.deleteMany({ clientId: id });
        res.json(products);
    } catch (error) {
        res.send({message:"Server Error on delete"})
    }
}
