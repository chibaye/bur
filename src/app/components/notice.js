import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Link from './link'

const styles = makeStyles(theme => ({
    root: {
        backgroundColor: '#FFFBCC',
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing()
        }
    },
    span: {
        color: '#333',
        marginRight: theme.spacing()
    },
    container: {
        padding: '0 !important'
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            padding: theme.spacing(0, 1),
        }
    },
    link: {
        textDecoration: 'underline',
        marginTop: 2
    }
}))

export default () => {
    const classes = styles()
    return <AppBar component='header' color='primary' className={classes.root}>
        <Toolbar variant='dense'>
            <Container className={classes.container}>
                <Typography className={classes.centered}>
                    <span className={classes.span}><b>DEADLINE</b> for submission extended extended to <b>1<sup>st</sup> November 2019.</b></span>
                    <Link name='More,announcement' className={classes.link}/>
                </Typography>
            </Container>
        </Toolbar>
    </AppBar>
}