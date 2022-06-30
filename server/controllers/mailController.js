import Mail from "../models/mailModel.js";


export const getMails = async (req,res) => {
    try {
        const mails = await Mail.find();
        if(!mails) return res.send("There is no mail")
        res.json(mails)

    } catch (error) {
        res.send({ message:"Server Error" })
    }    
}

export const getMail = async (req,res) => {
    const {id} = req.params

    try {
        const mail = await Mail.findById(id);
        if(!mail) return res.send("Mail is not found")

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const makeMail = async (req,res) => {
    const { name, email, message } = req.body

    const newMail = await new Mail({ ...req.body })


    try {
        const mail = await newMail.save();
        res.json(mail)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const deleteMail = async (req,res) => {
    const {id} = req.params;

    try {
        const mail = await Mail.findByIdAndDelete(id);
        res.json(mail);
    } catch (error) {
        res.send({message:"Server Error"})
    }
}

