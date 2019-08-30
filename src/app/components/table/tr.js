import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({loading, fields}) =>
    <TableRow>
        <TableCell align='center' colSpan={fields.length + 1} style={{borderBottom: 0}}>
            {loading ? <CircularProgress size={30}/> : 'Nothing here yet'}
        </TableCell>
    </TableRow>