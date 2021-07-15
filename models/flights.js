import mongoose from "mongoose";

export {
    Flight
}

//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const airlines = { 
    'American': 1,
    'Southwest': 2,
    'United': 3
}

const airports = {
    'AUS': 1,
    'DFW': 2,
    'DEN': 3,
    'LAX': 4,
    'SAN': 5
}
Object.freeze(airlines);
Object.freeze(airports);

//Model
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: airlines,
    }, //enum to include American, Southwest, and United
    airport: { 
        type: String,
        enum: airports,
        default: 'DEN'}, //enum to include AUS, DFW, DEN, LAX, SAN
    flightNo: Number, //Required Between 10 and 9999
    departs: Date //n/a
})

//Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)