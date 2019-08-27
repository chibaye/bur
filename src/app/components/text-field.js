import React, {useEffect} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Row from './row'
import Fieldset from './fieldset'
import TextField from '@material-ui/core/TextField'

const styles = makeStyles(theme => ({
    textField: {

    }
}))

export default ({name, value, onChange}) => {
    const classes = styles()

    return <>
        <Row title='Personal Details'>
            <Fieldset label='Given Names' required>
                <TextField
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={classes.textField}
                    placeholder='Enter exactly as stated on your NRC'
                />
            </Fieldset>
        </Row>
    </>
}