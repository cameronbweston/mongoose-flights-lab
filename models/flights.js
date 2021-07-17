import mongoose from "mongoose";

export {
    Flight
}

//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    }, //enum to include American, Southwest, and United
    airport: { 
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'}, //enum to include AUS, DFW, DEN, LAX, SAN
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    }, //Required Between 10 and 9999
    tickets: [ticketSchema],
    departs: Date //n/a
}, {
    timestamps: true
})

//Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)