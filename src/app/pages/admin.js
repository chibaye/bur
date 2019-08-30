import React from 'react'

import withAuth from '../hoc/auth'
import Row from '../components/row'
import Table from '../components/table'
import Layout from '../components/layout'

export default withAuth(() => {
    return <Layout>
        <Row disableGutters disableBackground>
            <Table />
        </Row>
    </Layout>
})