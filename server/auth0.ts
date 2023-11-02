import { auth } from 'express-oauth2-jwt-bearer'
import * as oidc from 'express-openid-connect'
import dotenv from 'dotenv'

dotenv.config()

export const oidcConfig: oidc.ConfigParams = {
  authorizationParams: {
    response_type: 'code',
    scope: 'openid profile email create:orders update:users',
    audience: process.env.VITE_AUTH0_AUDIENCE,
  },
  authRequired: false,
  auth0Logout: true,

  baseURL: 'http://localhost:3000',
  clientID: process.env.VITE_AUTH0_CLIENT_ID,
  clientSecret: process.env.VITE_AUTH0_CLIENT_SECRET,
  issuerBaseURL: `https://${process.env.VITE_AUTH0_DOMAIN}`,
  secret: 'LONG_RANDOM_STRING',
  routes: {
    login: false,
    postLogoutRedirect: '/moderator/home',
  },
}

const authConfig = {
  issuerBaseURL: `https://${process.env.VITE_AUTH0_DOMAIN}`,
  audience: process.env.VITE_AUTH0_AUDIENCE,
}

export const validateAccessToken = auth(authConfig)
