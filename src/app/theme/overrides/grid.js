import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme()

export default {
    item: {
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            maxWidth: '100% !important',
            flexBasis: '50% !important'
        }
    }
}