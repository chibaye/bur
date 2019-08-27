import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import File from './icons/file'

const styles = makeStyles(theme => ({
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        width: 460,
        height: 32,
        opacity: 0,
        outline: 0,
        zIndex: 2,
        position: 'absolute',
        background: '#fff'
    },
    small: {
        fontSize: 11,
        marginLeft: 28,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    placeholder: {
        color: '#b5babb',
        height: 22,
        overflow: 'hidden',
        fontSize: 17,
        marginLeft: 8,
        textOverflow: 'ellipsis'
    },
    progress: {
        marginTop: 6,
        marginLeft: 26,
        opacity: 0
    }
}))

const ellipsis = s => s.length > 13 ? `...${s.slice(-13)}` : s

const getNames = files => files.length > 1 ?
    [...new Array(2)].map((n, i) => ellipsis(files[i].name)).toString() : ellipsis(files[0].name)

export default ({name, files, onChange, ...rest}) => {
    const classes = styles()

    return <div>
        <div className={classes.row}>
            <File/>
            <span className={classes.placeholder}>{files ? getNames(files) : 'Choose File(s)'}</span>
            <input type='file' name={name} className={classes.input} onChange={onChange} {...rest}/>
            {[...new Array(rest.multiple ? 2 : 1)].map((n, i) =>
                <progress key={i} id={`${name}-${i}`} value='0' max='100' className={classes.progress}>0%</progress>
            )}
        </div>
        <small className={classes.small}>.jpg .jpeg .png .bmp .pdf, up to 3 MB</small>
    </div>
}