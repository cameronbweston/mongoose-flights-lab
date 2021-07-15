import mongoose from "mongoose";

export {
    Flight
}

//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//Model
const flightSchema = new Schema({
    airline: String, //enum to include American, Southwest, and United
    airport: String, //enum to include AUS, DFW, DEN, LAX, SAN
    flightNo: Number, //Required Between 10 and 9999
    departs: Date //n/a
})

//Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)