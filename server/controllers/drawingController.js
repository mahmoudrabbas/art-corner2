
import Drawing from '../models/drawingModel.js'


export const getAllDrawings = async (req,res) => {
    try {
        const drawings = await Drawing.find().sort({date: -1});
        res.json(drawings)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const getDrawing = async (req,res) => {
    const {id} = req.params

    try {
        const drawing = await Drawing.findById(id);
        res.json(drawing)
    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const createDrawing = async (req,res) => {
    const {title,artist,artistId,drawing,price,category} = req.body
    const date = new Date();

    const newDrawing = await new Drawing({
        title,
        artist,
        artistId,
        drawing,
        price,
        category,
        date
    })

    try {
        const drawing = await newDrawing.save();
        res.json(drawing)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const deleteDrawing = async (req,res) => {
    const {id} = req.params;

    try {
        const drawing = await Drawing.findByIdAndDelete(id);
        res.json(drawing)
    } catch (error) {
        res.send({message:"Server Error"})
    }
}


export const updateDrawing = async (req,res) => {
    const {id} = req.params;
    try {
        const updatedDrawing = {...req.body, _id:id}
        const drawing = await Drawing.findByIdAndUpdate(id, updatedDrawing, {new:true});
        res.json(drawing)
    } catch (error) {
        res.send({message:"Server Error"})
    }
}


export const getAllUserDrawings = async (req,res) => {
    const {id} = req.params;
    try {
        const drawings = await Drawing.find({artistId: id}).sort({ date:1 })
        res.json(drawings)
    } catch (error) {
        res.send({message:"Server Error"})
    }
}

export const getfirstThreeUserDrawings = async (req,res) => {
    const {id} = req.params;

    try {
        const drawings = await Drawing.find({artistId: id}).limit(4).sort({date:-1})
        res.json(drawings)
    } catch (error) {
        res.send({message:"Server Error"})
    }
}





