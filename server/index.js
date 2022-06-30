import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import userRoute from './routes/userRoute.js';
import drawRoute from './routes/drawRoute.js';
import bookRoute from './routes/bookRoute.js';
import courseRoute from './routes/courseRoute.js';
import eventsRoute from './routes/eventRoute.js';
import orderRoute from './routes/orderRoute.js';
import cartRoute from './routes/cartRoute.js';
import reportRoute from './routes/reportRoute.js';
import mailRoute from './routes/mailRoute.js';

dotenv.config();
const PORT = process.env.PORT || 5000


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));



app.use('/users', userRoute)
app.use('/drawings', drawRoute)
app.use('/books', bookRoute)
app.use('/courses', courseRoute)
app.use('/events', eventsRoute)
app.use('/orders', orderRoute)
app.use('/reports', reportRoute)
app.use('/cart', cartRoute)
app.use('/mails', mailRoute)


app.use((req,res,next) => {
    res.send({
        error:"Not Found"
    })
    next();
})


// connection to database

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) ) )
    .catch((err) => console.log(err.message))

