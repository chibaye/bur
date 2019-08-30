import next from 'next'
import express from 'express'
import routes from '../functions/app/routes'
import middleware from '../functions/app/middleware'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: './src/app'})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    middleware(server)
    routes(server)

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})