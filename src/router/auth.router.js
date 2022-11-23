import express from 'express'

import  passport from 'passport'

import googleToken from '../libs/passport.js'

googleToken()


const router = express.Router()

router.post('/google', passport.authenticate('google-token', { session: false }), (request, response) => {
    try {
        response.json({
            messaje: 'hola'
        })
    } catch (e) {
        console.log(e)
        response.json({
            messaje: e.message
        })
    }
    
})

export default router