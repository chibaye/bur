import next from 'next'
import path from 'path'
import express from 'express'
import {runWith} from 'firebase-functions'

import routes from './app/routes'
import middleware from './app/middleware'

const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev,
    conf: { distDir: `${path.relative(process.cwd(), __dirname)}/io` }
})
const handle = app.getRequestHandler()
const opts = { memory: '2GB' }

export const io = runWith(opts).https.onRequest((req, res) => {
    app.prepare().then(() => {
        const server = express()

        middleware(server)
        routes(server)

        server.get('*', (req, res) => handle(req, res))

        return server(req, res)
    })
})

// Keep Awake
export {awake} from './fx'