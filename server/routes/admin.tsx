import express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'
import Layout from '../components/Layout.tsx'

const router = express.Router()

router.get('/admin', (req,res)=>{
res.send(renderToStaticMarkup(<Layout>
		hello
	</Layout>))
})
