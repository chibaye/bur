import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ListItem from '@material-ui/core/ListItem'
import Container from '@material-ui/core/Container'
import {Toolbar, Typography} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Icon from './icons'
import Logo from './icons/logo'

const styles = makeStyles(theme => ({
    toolbar: {
        padding: 32,
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing()
        }
    },
    text: {
        fontSize: '1rem'
    },
    centered: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    xs6: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            maxWidth: '100% !important',
            flexBasis: '100% !important',
            marginBottom: theme.spacing(2)
        }
    },
    listItemText: {
        [theme.breakpoints.down('xs')]: {
            margin: 0
        }
    },
    listItemIcon: {
        [theme.breakpoints.down('xs')]: {
            minWidth: 36
        }
    },
    lt: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 14
        }
    }
}))

export default () => {
    const classes = styles()
    return <AppBar component='footer' color='secondary'>
        <Toolbar className={classes.toolbar}>
            <Container>
                <Grid container>
                    <Grid item xs={6} className={classes.xs6}>
                        <ListItem>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon name='facebook' fill='#fff'/>
                            </ListItemIcon>
                            <ListItemText primary='walanda.org' classes={{root: classes.listItemText, primary: classes.text}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon name='email' fill='#fff'/>
                            </ListItemIcon>
                            <ListItemText primary='bursaries@walanda.org' classes={{root: classes.listItemText, primary: classes.text}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon name='phone' fill='#fff'/>
                            </ListItemIcon>
                            <ListItemText primary='0953 760909 / 0968 437034' classes={{root: classes.listItemText, primary: classes.text}}/>
                        </ListItem>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='button'>CONTACT DETAILS</Typography>
                        <Typography>Plot No. 4485A,</Typography>
                        <Typography>Katima Mulilo Rd,</Typography>
                        <Typography>Kalundu</Typography>
                        <Typography>P.O. Box 38285</Typography>
                        <Typography>Lusaka, Zambia</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.centered}>
                        <Logo/>
                        <Typography variant='h6' className={classes.lt}>Walanda Bursaries</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    </AppBar>
}