import React from 'react'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'

export default ({children, href, name='', ...rest}) => {
    const [title, arg] = name.split(',')
    const url = href ? href : (/^-?\d+$/.test(arg) ? arg < 0 ? '' : title.split(' ')[arg] : arg || title.replace(new RegExp(' ', 'g'), '-')).toLowerCase()

    return <NextLink href={url}>
        <Link href={url} noWrap {...rest}>{children ? children : title}</Link>
    </NextLink>
}