import clsx from 'clsx'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import {lighten} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import Icon from '../icons'

const styles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
}))

export default props => {
    const classes = styles()
    const { numSelected } = props

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color='inherit' variant='subtitle1'>
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant='h6' id='tableTitle'>
                        Applicants
                    </Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title='Delete'>
                        <IconButton aria-label='delete'>
                            <Icon name='delete' />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title='Filter list'>
                        <IconButton aria-label='filter list'>
                            <Icon name='filter'/>
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    )
}