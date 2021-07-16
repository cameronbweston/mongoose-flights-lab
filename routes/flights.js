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
router.post('/:id', flightsController.createTicket)
