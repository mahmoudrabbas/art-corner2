import mongoose from 'mongoose'
import Book from '../models/bookModel.js'


export const getBooks = async (req,res) => {
    try {
        const books = await Book.find();
        if(!books) return res.send("There is no books")
        res.json(books)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const getBook = async (req,res) => {
    const {id} = req.params

    try {
        const book = await Book.findById(id);
        if(!book) return res.send("Book is not found")

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const createNewBook = async (req,res) => {
    const {title,author,description,year,cover,book} = req.body

    const newBook = await new Book({
        title,
        author,
        description,
        year,
        cover,
        book
    })
    try {
        const book = await newBook.save();
        res.json(book)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const deleteBook = async (req,res) => {
    const {id} = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);
        res.json(book);
    } catch (error) {
        res.send({message:"Server Error"})
    }
}


