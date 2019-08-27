import React from 'react'
import Typography from '@material-ui/core/Typography'

import Row from '../components/row'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    type: {
        marginBottom: 18
    }
}))

export default () => {
    const classes = styles()
    return <Row disableBackground>
        <Typography className={classes.type}><b>Walanda Bursaries</b> is established with the intention to provide financial assistance to individuals that qualify to be enrolled in various colleges and Universities. Preference will be given to Zambian students with a proven record of good grades and a passion for education.</Typography>
        <Typography className={classes.type}><b>Walanda assistance</b> is based on academic performance. Bursaries are awarded twice in a year provided funds are available.</Typography>
        <Typography className={classes.type}><b>Walanda awards</b> bursaries on the basis of a comprehensive process. Bursaries awarded are based upon the availability of funds and additional qualifying criteria.</Typography>
        <Typography className={classes.type}><b>DEADLINE</b> for bursary applications is 1st November for the January intake. Applications made after the said date will be considered for the June/July intake.</Typography>
    </Row>
}
