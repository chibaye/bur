import next from 'next'
import helmet from 'helmet'
import express from 'express'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: './src/app'})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(helmet())

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})