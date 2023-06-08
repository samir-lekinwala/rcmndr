import { auth } from 'express-oauth2-jwt-bearer'
import dotenv from 'dotenv'

dotenv.config()

export const validateAccessToken = auth({
  issuerBaseURL:
    `https://${process.env.VITE_AUTH0_DOMAIN}` ||
    'https://rcmndr-dev-academy.au.auth0.com',
  audience: process.env.VITE_AUTH0_AUDIENCE || 'https://rcmndr/api',
})
