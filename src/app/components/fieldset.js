import clsx from 'clsx'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    fieldset: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 30,
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        }
    },
    label: {
        flex: '0 0 220px',
        color: '#323334',
        display: 'flex',
        fontSize: 18,
        marginTop: 2,
        marginRight: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(2)
        }
    },
    required: {
        '&:after': {
            width: 6,
            height: 6,
            content: "''",
            background: '#FF4800',
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(1),
            borderRadius: '100%'
        }
    }
}))

export default ({children, label, required}) => {
    const classes = styles()

    return <div className={classes.fieldset}>
        <label className={clsx(classes.label, {[classes.required]: required})}>{label}</label>
        {children}
    </div>
}