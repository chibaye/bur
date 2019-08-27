import React from 'react'
import {Typography} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ListItem from '@material-ui/core/ListItem'
import Container from '@material-ui/core/Container'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Link from './link'
import Logo from './icons/logo'

export default () => {
    return <AppBar component='header' color='primary'>
        <Toolbar>
            <Container>
                <Link href='/'>
                    <ListItem>
                        <ListItemIcon>
                            <Logo size='38px' fill='#56ceb5'/>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='h5' style={{color: 'white'}}>walanda.org</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
            </Container>
        </Toolbar>
    </AppBar>
}