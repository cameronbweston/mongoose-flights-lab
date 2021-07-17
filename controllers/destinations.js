import { Destination } from '../models/destinations.js'

export {
    newDestination as new,
    create
}

function create(req, res) {
    Destination.create(req.body)
    .then(() => {
        res.redirect('/destinations/new')
    })
    .catch(error => {
        console.log(error)
    })
}

function newDestination(req, res) {
    Destination.find({})
    .then(destinations => {
        res.render('destinations/new', {
            destinations
        })
    })
    .catch(error => {
        console.log(error)
    })
}