import React from 'react'

import Form from '../components/form'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Payments from '../components/payments'

export default () =>
    <Layout>
        <Hero/>
        <Intro/>
        <Form/>
        <Payments/>
    </Layout>