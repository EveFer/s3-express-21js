import express from 'express'
import cors from 'cors'
import {errorHandle} from './middlewares/errorHandle.js'

import productRouter from './router/products.router.js'
import authRouter from './router/auth.router.js'

const server = express()

// middlewares
server.use(express.json())
server.use(cors())

// routers

server.use('/products', productRouter)
server.use('/auth', authRouter)


// middleware - handleErrors
server.use(errorHandle)

export {server}