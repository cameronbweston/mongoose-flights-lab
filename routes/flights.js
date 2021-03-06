import { Router } from 'express'
const router = Router()
import * as flightsController from '../controllers/flights.js'

export {
  router
}

//GET localhost:3000/flights/index
router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show)

router.post('/', flightsController.create);
router.post('/:id/tickets/:ticketId', flightsController.deleteTicket)
router.post('/:id/tickets', flightsController.createTicket)
router.post('/:id/destinations', flightsController.addDestination);

