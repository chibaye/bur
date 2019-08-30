import {auth} from '../firebase'

export default app => {
    app.post('/login', async (req, res) => {
        try {
            const {idToken} = req.body
            const expiresIn = 60 * 60 * 24 * 7 * 1000
            const sessionCookie = await auth.createSessionCookie(idToken, {expiresIn})

            res.cookie('__session', sessionCookie, {maxAge: expiresIn, httpOnly: true, secure: (process.env.NODE_ENV === 'production')})
            return res.end(JSON.stringify({ok: true, status: 'success'}))
        } catch (error) {
            console.error('ERR', error)
            return res.end(JSON.stringify({ok: false, status: 'unauthorized', error}))
        }
    })

    app.post('/logout', async (req, res) => {
        try {
            const {__session} = req.cookie
            res.clearCookie('__session')
            const decodedClaims = await auth.verifySessionCookie(__session)
            await auth.revokeRefreshTokens(decodedClaims.sub)
            return res.end(JSON.stringify({ok: true, status: 'success'}))
        } catch (error) {
            return res.end(JSON.stringify({ok: false, status: 'unauthorized', error}))
        }
    })
}