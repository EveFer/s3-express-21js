import passport from 'passport'
import GoogleStrategy from 'passport-google-token'

import * as dotenv from 'dotenv'
dotenv.config()

export default function () {
    passport.use(new GoogleStrategy.Strategy(
      {
        clientID: process.env.CLIENT_ID_GOOGLE,
        clientSecret: process.env.CLIENT_SECRET_GOOGLE,
        passReqToCallback: true
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          // const user = await User.findOne({ email: profile._json.email })
          console.log('Hello')
          console.log(accessToken)
          console.log(profile)
          console.log(profile._json)
            //   logica
          done(null, { ...profile, success: true })
        } catch (error) {
          done(null, null)
        }
      }
    )
    )
  }