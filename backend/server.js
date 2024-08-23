const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require ('./MealRouter');
const cors = require('cors')

require('dotenv').config()

mongoose.set('strictQuery', false); 


const PORT = process.env.port || 7000;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We are connected on Port Mongo'))
.catch((err) => console.log(err))




app.use(routes)

app.listen(PORT, ()=>{
    console.log(`I'm listenning at PORT ${PORT}`)
})





// Ipfm27ZdGeeWbBZt
// mongodb+srv://areyhana:Ipfm27ZdGeeWbBZt@cluster0.6bsuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0