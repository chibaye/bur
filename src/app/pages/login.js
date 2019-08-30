import React, {useState} from 'react'
import clsx from 'clsx'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import ajax from '../lib/ajax'
import {auth} from '../lib/firebase'
import Layout from '../components/layout'
import redirect from '../utils/redirect'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        maxWidth: 350,
        padding: theme.spacing(2)
    },
    submit: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    progress: {
        color: 'white',
        display: 'none',
        marginLeft: 20
    },
    show: {display: 'block'},
}))

export default () => {
    const classes = styles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()

        setLoading(true)

        try {
            const {user} = await auth.signInWithEmailAndPassword(email, password)
            const idToken = await user.getIdToken()
            await ajax('/login', {data: {idToken}})
            await auth.signOut()
            setLoading(false)
            redirect({},'/admin')
        } catch (e) {
            setLoading(false)
            alert('Invalid Email/password')
            console.error('err', e)
        }
    }

    return <Layout>
        <div className={clsx(classes.root, classes.centered)}>
            <form onSubmit={handleSubmit}>
                <Paper elevation={0} className={classes.paper}>
                    <Typography variant='h5'>Login</Typography>
                    <TextField label='Email' value={email} onChange={({target: {value}}) => setEmail(value)}/>
                    <TextField label='Password' type='password' value={password} onChange={({target: {value}}) => setPassword(value)}/>
                    <Button type='submit' className={classes.submit}>
                        <Typography className={classes.typography}>Sign in</Typography>
                        <CircularProgress size={20} thickness={4} className={clsx(classes.progress, {[classes.show]: loading})}/>
                    </Button>
                </Paper>
            </form>
        </div>
    </Layout>
}