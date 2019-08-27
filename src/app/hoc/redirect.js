import React from 'react'
import Redirect from '../utils/redirect'

export default Page => {
    const withAuth = props => <Page {...props} />

    withAuth.getInitialProps = async ctx => {
        const {data: {email}} = await ctx.store.getState()

        !email && Redirect(ctx, '/')

        return {...(Page.getInitialProps ? await Page.getInitialProps(ctx) : {})}
    }

    return withAuth
}