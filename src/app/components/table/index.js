import React, {useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'
import TablePagination from '@material-ui/core/TablePagination'

import {firestore} from '../../lib/firebase'
import date from '../../utils/date'

import Toolbar from './toolbar'
import Header from './header'
import Tr from './tr'

const fields = [
    {id: 'Surname', numeric: false, disablePadding: true, label: 'Surname'},
    {id: 'Phone Number', numeric: true, disablePadding: false, label: 'Phone'},
    {id: 'Email', numeric: true, disablePadding: false, label: 'Email'},
    {id: 'Gender', numeric: true, disablePadding: false, label: 'Gender'},
    {id: 'nrc', numeric: true, disablePadding: false, label: 'NRC'},
    {id: 'created', numeric: true, disablePadding: false, label: 'Date Created'}
]

const desc = (a, b, orderBy) =>
    b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0

const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0])
        return order !== 0 ? order : a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

const getSorting = (order, orderBy) =>
    order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)

const styles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}))

export default () => {
    const classes = styles()
    const [docs, setDocs] = React.useState({})
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const snap = await firestore.collection('bursaries').get()
            await setDocs(snap.docs)
            setLoading(false)
        } catch (err) {
            console.error(err)
        }
    }

    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc'
        setOrder(isDesc ? 'asc' : 'desc')
        setOrderBy(property)
    }

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = docs.map(n => n.data().surname)
            setSelected(newSelecteds)
            return
        }
        setSelected([])
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) =>
        setPage(newPage)

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const isSelected = name => selected.indexOf(name) !== -1
    const isEmpty = !Boolean(docs.length)

    return (
        <Paper className={classes.paper}>
            {!isEmpty && !loading && <Toolbar numSelected={selected.length} />}

            <div className={classes.tableWrapper}>
                <Table
                    className={classes.table}
                    aria-labelledby='tableTitle'
                >
                    <Header
                        classes={classes}
                        fields={fields}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={docs.length}
                    />
                    <TableBody>
                        {loading ? <Tr fields={fields} loading/> : isEmpty ? <Tr fields={fields}/> : stableSort(docs, getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((doc, index) => {
                                const isItemSelected = isSelected(doc.name)
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                    <TableRow
                                        hover
                                        onClick={event => handleClick(event, doc.surname)}
                                        role='checkbox'
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={doc.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell component='th' id={labelId} scope='row' padding='none'>
                                            {doc.data().surname}
                                        </TableCell>
                                        <TableCell align='right'>{doc.data().phone}</TableCell>
                                        <TableCell align='right'>{doc.data().email}</TableCell>
                                        <TableCell align='right'>{doc.data().gender}</TableCell>
                                        <TableCell align='right'>{doc.data().nrc}</TableCell>
                                        <TableCell align='right'>{date(doc.data().created.toDate())}</TableCell>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </div>
            {docs.length > rowsPerPage &&
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={docs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            }
        </Paper>
    )
}
