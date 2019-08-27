import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import overrides from  './overrides'
import palette from  './palette'
import props from  './props'

export default createMuiTheme({
    overrides,
    palette,
    props
})