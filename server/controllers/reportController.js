import Report from '../models/reportModel.js'


export const getAllreports = async (req,res) => {
    try {
        const reports = await Report.find();
        if(!reports) return res.send("There is no reports")
        res.json(reports)

    } catch (error) {
        res.send({ message:"Server Error" })
    }    
}

export const getReport = async (req,res) => {
    const {id} = req.params
    try {
        const report = await Report.findById(id);
        if(!report) return res.send("Report is not found")

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const makeReport = async (req,res) => {
    const { reporterId, artistId, drawingId, reason } = req.body

    const newReport = await new Report({  reporterId, artistId, drawingId, reason })


    try {
        const report = await newReport.save();
        res.json(report)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const deleteReport = async (req,res) => {
    const {id} = req.params;

    try {
        const report = await Report.findByIdAndDelete(id);
        res.json(report);
    } catch (error) {
        res.send({message:"Server Error"})
    }
}


