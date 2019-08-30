import React from 'react'

import redirect from '../utils/redirect'

export default Page => {
    const withAuth = props => <Page {...props} />

    withAuth.getInitialProps = async ctx => {

        const {__session} = (ctx.req ? ctx.req.cookies : document.cookie)
        !__session && redirect(ctx, '/login')

        return {...(Page.getInitialProps ? await Page.getInitialProps(ctx) : {})}
    }

    return withAuth
}

