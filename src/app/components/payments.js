import React from 'react'
import Grid from '@material-ui/core/Grid'
import {Typography} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        backgroundColor: '#eee'
    },
    hidden: {
        opacity: 0
    },
    xs6: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            maxWidth: '100% !important',
            flexBasis: '100% !important'
        }
    }

}))

export default () => {
    const classes = styles()

    return <div className={classes.root}>
        <Container>
            <Grid container>
                <Grid item xs={2}>
                    <Typography variant='button'>BANK DETAILS</Typography>
                    <Typography>Bank</Typography>
                    <Typography>Account Name</Typography>
                    <Typography>Account Number</Typography>
                    <Typography>Branch</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography className={classes.hidden}>.</Typography>
                    <Typography>AtlasMara</Typography>
                    <Typography>Mulena Information Technology Ltd</Typography>
                    <Typography>3255047933029</Typography>
                    <Typography>East Pack Mall</Typography>
                </Grid>
                <Grid item xs={6} className={classes.xs6}>
                    <Typography variant='button'>MOBILE MONEY(MTN)</Typography>
                    <Typography>Dial *303#</Typography>
                    <Typography>Select option 5 (Momo Pay)</Typography>
                    <Typography>Select option 1 (Merchant Code)</Typography>
                    <Typography>Enter Merchant Code: 748832</Typography>
                    <Typography>Enter Reason: Walanda Bursaries</Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
}