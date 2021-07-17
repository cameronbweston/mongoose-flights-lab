import mongoose from 'mongoose'

export {
    Destination
}

const Schema = mongoose.Schema;

const destinationSchema = Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        unique: true
    }
})

const Destination = mongoose.model('Destination', destinationSchema);