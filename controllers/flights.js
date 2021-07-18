import { Flight } from "../models/flights.js";
import { Destination } from "../models/destinations.js";
export {
    index,
    newFlight as new,
    create,
    show,
    createTicket,
    deleteTicket,
    addDestination    
}

function addDestination(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.destinations.push(req.body.id)
        flight.save()
        .then(() => {
            console.log(`Stored destination id: ${req.params.id}`)
            res.redirect(`/flights/${req.params.id}`)
        })
    })
}

function deleteTicket(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.pull(req.params.ticketId)
        flight.save()
        .then(() => {
            res.redirect(`/flights/${req.params.id}`)
        })
    })
    .catch(err => {
        console.log(err)
    })
}

function createTicket(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.push(req.body)
        console.log(`body: ${flight.tickets}`)
        flight.save()
        .then(() => {
            res.redirect(`/flights/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    })
}

//function SHOW INDIVIDUAL FLIGHTS DETAILS
function show(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        Destination.find({})
        .then(destinations => {
            res.render('flights/show', {
                title: 'Flight Details',
                flight,
                destinations
            })
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