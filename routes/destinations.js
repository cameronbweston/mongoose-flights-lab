import { Router } from 'express'
const router = Router()
import * as destinationsController from '../controllers/destinations.js'

export {
  router
}

//GET localhost:3000/destinations/new
router.get('/new', destinationsController.new);
//POST localhost:3000/destinations/create
router.post('/create', destinationsController.create);
