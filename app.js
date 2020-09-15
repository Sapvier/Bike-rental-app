const express = require('express')
const mongoose = require('mongoose')
import * as db from './DataBaseUtils';

const app = express()

app.get('/', (req, res) => {
    db.listBikes().then(data => res.send(data));
});

app.post('/', (req, res) => {
    db.createBike(req.body).then(data => res.send(data));
});

app.delete('/', (req, res) => {
    db.deleteBike(req.id).then(data => res.send(data));
});

require('./app/routes/note.routes.js')(app)

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
        process.exit(1)
    }
}
start()





