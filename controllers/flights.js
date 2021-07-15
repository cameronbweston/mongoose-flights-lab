import { Flight } from "../models/flights.js";

export {
    index
}
//function SHOW FLIGHTS INDEX
function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) {
            console.log(err);
        }
        res.render('flights/index', {
            flights: flights
        })
    })
}

//function ALL FLIGHTS

//function ADD FLIGHT