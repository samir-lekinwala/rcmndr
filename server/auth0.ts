import { auth } from 'express-oauth2-jwt-bearer'
import dotenv from 'dotenv'

dotenv.config()

const authConfig = {

  issuerBaseURL: 'https://rcmndr-dev-academy.au.auth0.com/',
  audience: 'https://rcmndr/api',
}

export const validateAccessToken = auth(authConfig)
