import Event from '../models/eventModel.js';


export const addEvent = async (req,res) => {
    const {artist, artistId, date, eventDescription, eventName, location, price, time} = req.body;
    const createdAt = new Date();
    const newEvent = await new Event({
        artist,
        date, 
        artistId,
        eventDescription, 
        eventName, 
        location, 
        price, 
        time,
        createdAt
    })
    
    try {
        const event = await newEvent.save();
        res.json(event)
    } catch (error) {
        res.status(409).json({ message: "Failed to create the Event" })
    }
}


export const getEvent = async (req,res) => {
    const {id} = req.params;
    try {
        const event = await Event.findById(id);
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: "This Event is not found" })
    }
}

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "failed to get all the events" })
    }
}

export const deleteEvent = async (req, res) => {
    const {id} = req.params;
    try {
        const event = await Event.findByIdAndDelete(id);
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "failed to delete" })
    }
}


export const joinEvent = async (req,res) => {
    const {id} = req.params;
    try {
        const event = await Event.findById(id);
        if(!event) return res.json({ message: "sorry this event is not found" });

        const index = event.people.findIndex((id) => id === String(req.userId))
        if(index === -1 ){
            event.people.push(req.userId);
        }else {
            event.people = event.people.filter(id => id !== String(req.userId))
        }
        
        const updatedEvent = await Event.findByIdAndUpdate(id, {...event} , {new:true} )
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: "failed to update" })
    }
}


export const acceptEvent = async (req,res) => {
    const {id} = req.params;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, {...req.body, isAccepted:"accepted"}, {new:true} )
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: "failed to update" })
    }

}

