import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Row from './row'

const styles = makeStyles(theme => ({
    ol: {
        marginTop: -30,
        fontSize: '1rem'
    }
}))

export default () => {
    const classes = styles()

    return <Row title='Mobile Payment Steps' disableBackground>
        <ol className={classes.ol}>
            <li>Dial *303#</li>
            <li>Select option 5 (Momo Pay)</li>
            <li>Select option 1 (Merchant Code)</li>
            <li>Enter Merchant Code: 748832</li>
            <li>Enter Reason: Walanda Bursaries</li>
        </ol>
    </Row>
}