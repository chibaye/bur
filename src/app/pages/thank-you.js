import React from 'react'
import {connect} from 'react-redux'
import {Card} from '@material-ui/core'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/core/styles/makeStyles'

import withRedirect from '../hoc/redirect'

const styles = makeStyles(theme => ({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: '1.2rem',
        marginBottom: theme.spacing(3)
    },
    details: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #eaeaea',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2, 3),
        margin: theme.spacing(1, 0),
    },
    b: {
        fontWeight: 500
    }
}))

export default withRedirect(connect(state => state)(({data: {names, surname, phone, email}}) => {
    const classes = styles()
    return <Layout>
        <Container className={classes.container}>
            <Card>
                <CardContent>
                    <Typography variant='h6' component='h2' className={classes.header}>
                        Application successful, we'll get back to you soon.
                    </Typography>
                    <Typography component='p' className={classes.details}>
                        <b className={classes.b}>Full Name: </b> {`${names} ${surname}`}
                        <br />
                        <b className={classes.b}>Phone Number: </b> {phone}
                        <br />
                        <b className={classes.b}>Email: </b> {email}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    </Layout>
}))
