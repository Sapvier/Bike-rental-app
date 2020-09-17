const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('./routes/bike.routes.js')(app)
app.use(cors())

async function start() {
    try {
        await mongoose.connect( 'mongodb+srv://sapvier:1234mongo@cluster0.90ktt.azure.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(5000, () => console.log('Server is up'))
    }
    catch (e){
        console.log('Server error', e.message)
        process.exit()
    }
}
start()







