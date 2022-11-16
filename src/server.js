import express from 'express'
import cors from 'cors'
import {errorHandle} from './middlewares/errorHandle.js'

import productRouter from './router/products.router.js'

const server = express()

// middlewares
server.use(express.json())
server.use(cors())

// routers

server.use('/products', productRouter)


// middleware - handleErrors
server.use(errorHandle)

export {server}