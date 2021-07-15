import { mongoose } from "mongoose"

export {
    Flight
}

//Model
const flightSchema = new mongoose.Schema({
    airline: String, //enum to include American, Southwest, and United
    airport: String, //enum to include AUS, DFW, DEN, LAX, SAN
    flightNo: Number, //REquired Between 10 and 9999
    departs: Date //n/a
})

const Flight = mongoose.model('Flight', flightSchema)