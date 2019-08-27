import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme()
export default {
    maxWidthSm: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 890
        }
    }
}