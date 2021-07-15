import { Flight } from "../models/flights.js";

export {
    index,
    newFlight as new,
    create
}
//function SHOW FLIGHTS INDEX
//function ALL FLIGHTS
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

//function show ADD FLIGHT page so user can create
function  newFlight(req, res) {
    res.render('flights/new')
}

//function CREATE FLIGHT
function create(req, res) {
    //handle all data and make sure its in the right form
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new')
        //If no error, redirect back to the flights index page
        res.redirect('flights/')
    })
}