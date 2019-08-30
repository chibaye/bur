import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ListItem from '@material-ui/core/ListItem'
import Container from '@material-ui/core/Container'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Link from './link'
import Logo from './icons/logo'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    logoText: {
        color: 'white',
        fontWeight: 300,
        margin: 0,
        maxWidth: 'fit-content',
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing()
        }
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(1.5)
        }
    }
}))

export default () => {
    const classes = styles()
    return <AppBar component='header' color='primary'>
        <Toolbar>
            <Container className={classes.container}>
                <Link href='/'>
                    <ListItem>
                        <ListItemIcon>
                            <Logo size='38px' fill='#56ceb5'/>
                        </ListItemIcon>
                        <ListItemText>
                            <h2 className={classes.logoText}>walanda.org</h2>
                        </ListItemText>
                    </ListItem>
                </Link>
            </Container>
        </Toolbar>
    </AppBar>
}