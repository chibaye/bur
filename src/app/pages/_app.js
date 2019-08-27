import React from 'react'
import Head from 'next/head'
import {Provider} from 'react-redux'
import App  from 'next/app'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../theme'
import initStore from '../lib/redux'
import reducers from '../lib/redux/reducers'

export default withRedux(initStore(reducers))(class extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {jssStyles.parentNode.removeChild(jssStyles)}
    }

    render() {
        const { Component, pageProps, store } = this.props

        return (
            <>
                <Head>
                    <title>Walanda Bursaries</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </ThemeProvider>
            </>
        )
    }
})