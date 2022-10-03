import express from "express"
import controller from "../controller/librosController.js"

const router = express.Router()



router.get('/:id?', controller.getLibros)

router.post('/', controller.postLibros)

router.put('/:id?',controller.putLibros)

router.delete('/:id?', controller.deleteLibros)

export default router