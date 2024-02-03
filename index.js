const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');

const productRoute = require('./routes/products')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const cartRoute = require('./routes/cart')
const ordersRoute = require('./routes/orders')
const port = 8000



app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit:'10mb',extended :true}));


app.use('/api',authRoute)
app.use('/api/products',productRoute)
app.use('/api/orders',ordersRoute)
app.use('/api/cart',cartRoute)
app.use('/api/users',userRoute)

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected")).catch((err)=>console.log(err))




app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${process.env.PORT}!`))


