import { Destination } from '../models/destinations.js'

export {
    newDestination as new
}

function newDestination(req, res) {
    console.log('Made it here')
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