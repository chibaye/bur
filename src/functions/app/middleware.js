import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default app => {
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cookieParser())
}