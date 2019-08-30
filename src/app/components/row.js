import clsx from 'clsx'
import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: theme.spacing(3),
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            fontSize: 18
        }
    },
    subtitle: {
        fontSize: 19,
        marginLeft: 4,
        marginTop: 4,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0
        }
    },
    background: {
        backgroundColor: 'rgba(0, 0, 240, 0.05)'
    },
    container: {
        paddingTop: theme.spacing(4)
    }
}))

export default ({children, title, subtitle, disableBackground, disableGutters}) => {
    const classes = styles()
    return <div className={classes.root}>
        {title && <Container maxWidth='sm' disab>
            <Typography component='div' variant='h2' className={classes.title}>
                {title}
                {subtitle && <Typography variant='h2' className={classes.subtitle}>{subtitle}</Typography>}
            </Typography>
        </Container>}

        {disableGutters ?
            <Container>{children}</Container> :
            <Container className={clsx(classes.container, {[classes.background]: !disableBackground})}>
                <Container maxWidth='sm'>{children}</Container>
            </Container>
        }
    </div>
}