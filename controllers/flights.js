import { Flight } from "../models/flights.js";

export {
    index,
    newFlight as new,
    create,
    show,
    createTicket
}

function createTicket(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.push(req.body)
        flight.save()
        .then(() => {
            res.redirect(`/flights/${req.params.id}`)
        })
    })
}

//function SHOW INDIVIDUAL FLIGHTS DETAILS
function show(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        res.render('flights/show', {
            title: 'Flight Details',
            flight
        })
    })
}

//function ALL FLIGHTS (Index)
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