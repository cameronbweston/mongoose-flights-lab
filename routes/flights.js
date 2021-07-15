import { Router } from 'express'
const router = Router()
import * as flightsController from '../controllers/flights.js'

export {
  router
}

//GET localhost:3000/flights/index
router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.post('/', flightsController.create);

