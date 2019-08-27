import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme()

export default {
    '@global': {
        'html, body, #__next': {
            height: '100%'
        },
        '#__next': {
            display: 'flex',
            flexDirection: 'column'
        },
        'main': {
            flexGrow: 1,
            [theme.breakpoints.down('xs')]: {
                margin: theme.spacing()
            }
        }
    }
}