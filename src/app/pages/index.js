import React from 'react'

import Form from '../components/form'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Payments from '../components/payments'
import Notice from '../components/notice'

export default () =>
    <Layout>
        <Notice/>
        <Hero/>
        <Intro/>
        <Form/>
        <Payments/>
    </Layout>