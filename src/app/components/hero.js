import React from 'react'
import {Typography} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    hero: {
        width: '100%',
        height: 550,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        [theme.breakpoints.down('xs')]: {
            borderRadius: 4
        }
    },
    cover: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        justifyContent: 'center',
        backgroundPosition: 'top right',
        background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://res.cloudinary.com/xox/image/upload/v1566808369/Female-Black-African-Student-Smiling_khaobf.jpg) no-repeat right top'
    },
    heading: {
        fontWeight: 700,
        marginTop: 362,
        color: theme.palette.common.white,
        textShadow: '0px 2px 3px rgba(0,0,0,0.4), 0px 4px 7px rgba(0,0,0,0.1), 0px 9px 12px rgba(0,0,0,0.1)'
    }
}))

export default () => {
    const classes = styles()
    return <div className={classes.hero}>
        <Container className={classes.cover}>
            <Typography variant='h2' className={classes.heading}>Walanda Bursaries</Typography>
        </Container>
    </div>
}