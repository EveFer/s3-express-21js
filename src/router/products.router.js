import express from 'express'
import * as productsUseCases from '../useCases/products.use.js'
import {StatusHttp} from '../libs/statusHttp.js'
import {upload} from '../middlewares/multer.js'

const router = express.Router()

router.post('/', upload.single('image'), async (request, response, next) => {
    try {
        // request.file
        const {body, file} = request
        console.log(file)
        console.log(body)

        const productCreated = await productsUseCases.create(body, file)

        response.json({
            success: true,
            message: 'product created successfully - test',
            data: {
                product: productCreated
            }
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})
router.get('/', async (request, response, next) => {
    try {
        const products = await productsUseCases.getAll()
        response.json({
            success: true,
            message: 'all products',
            data: {
                products
            }
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})
router.get('/:id', async (request, response, next) => {
    try {
        const {id} = request.params
        const product = await productsUseCases.getById(id)
        response.json({
            success: true,
            message: 'get a product',
            data: {
                product
            }
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})
router.patch('/:id', async (request, response, next) => {
    try {
        const {body, params: {id}} = request
        const product = await productsUseCases.updateById(id, body)
        response.json({
            success: true,
            message: 'product updated successfully',
            data: {
                product
            }
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})
router.delete('/:id', async (request, response, next) => {
    try {
        const {params: {id}} = request
        const product = await productsUseCases.deleteById(id)
        response.json({
            success: true,
            message: 'product deleted successfully',
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

export default router