import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Layout from '../components/layout'

const styles = makeStyles(theme => ({
    container: {
        padding: `${theme.spacing(8)}px 0 0 !important`,
    },
    mt: {
        marginTop: theme.spacing(2)
    }
}))

export default () => {
    const classes = styles()

    return <Layout>
        <Container className={classes.container}>
            <Typography variant='h6'>Message to Walanda Bursaries Applicants - Deadline Extension</Typography>
            <Typography className={classes.mt}>Greetings,</Typography>
            <Typography className={classes.mt}>Thank you for registering for Walanda Bursaries. Please note that, due to the requests for an extension on the deadline, we've decided to extend the deadline to 1<su>st</su> November 2019.</Typography>
            <Typography className={classes.mt}>You now have until that time to submit your entry. If you have already applied, please be patient as we are trying to offer more people the same opportunity.</Typography>
            <Typography className={classes.mt}>Should you have any questions, do not hesitate to contact us. No additional extensions will be offered, so please submit your applications on time.</Typography>
            <Typography className={classes.mt}>Kind regards,</Typography>
            <Typography>Walanada Team</Typography>
        </Container>
    </Layout>
}