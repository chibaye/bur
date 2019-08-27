import clsx from 'clsx'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import List from '@material-ui/core/List'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'
import SimpleReactValidator from 'simple-react-validator'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CircularProgress from '@material-ui/core/CircularProgress'

import Row from './row'
import Icon from './icons'
import Terms from './terms'
import Upload from './upload'
import Fieldset from './fieldset'
import {fileChange, inputChange, post} from '../lib/redux/actions/form'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    '@global': {
        '.srv-validation-message': {
            color: '#900'
        }
    },
    actions: {
        display: 'flex',
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    typography: {
        marginRight: theme.spacing() + 4
    },
    progress: {
        color: 'white',
        display: 'none'
    },
    show: {display: 'block'},
    col: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }
})

export default withStyles(styles, {withTheme: true})(connect(state => state, {
    fileChange,
    inputChange,
    post
})(class extends Component {

    validator = new SimpleReactValidator({autoForceUpdate: this})

    handleSubmit = e => {
        e.preventDefault()
        const {data, post} = this.props

        if (this.validator.allValid()) {
            post(data)
        } else {
            this.validator.showMessages()
            alert('There are errors on the form.')
        }
    }

    render() {
        const {classes, theme, data, files, form: {loading}, fileChange, inputChange} = this.props
        const {ids, letter, certificate, photos, payment} = files
        const {names, surname, phone, gender, address, email, birthday, school, major, guardian, guardianPhone, nrc} = data

        return (
            <form onSubmit={this.handleSubmit}>
                <Row title='Personal Details'>
                    <Fieldset label='Given Names' required>
                        <div className={classes.col}>
                            <TextField
                                name='names'
                                onChange={inputChange}
                                value={names}
                                className={classes.textField}
                                placeholder='Enter exactly as stated on your NRC'
                            />
                            {this.validator.message('name', names, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Surname' required>
                        <div className={classes.col}>
                            <TextField
                                name='surname'
                                onChange={inputChange}
                                value={surname}
                                className={classes.textField}
                                placeholder='Enter exactly as stated on your NRC'
                            />
                            {this.validator.message('surname', surname, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Gender' required>
                        <div className={classes.col}>
                            <RadioGroup aria-label='position' name='gender' value={gender} onChange={inputChange} row>
                                <FormControlLabel
                                    value='male'
                                    control={<Radio color='primary' disableRipple/>}
                                    label='Male'
                                    labelPlacement='end'
                                />
                                <FormControlLabel
                                    value='female'
                                    control={<Radio color='primary' disableRipple/>}
                                    label='Female'
                                    labelPlacement='end'
                                />
                            </RadioGroup>
                            {this.validator.message('gender', gender, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='NRC' required>
                        <div className={classes.col}>
                            <TextField
                                name='nrc'
                                onChange={inputChange}
                                value={nrc}
                                className={classes.textField}
                                placeholder='000000/00/0'
                            />
                            {this.validator.message('nrc', nrc, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='birthday' required>
                        <div className={classes.col}>
                            <TextField
                                name='birthday'
                                onChange={inputChange}
                                value={birthday}
                                className={classes.textField}
                                placeholder='DD/MM/YYYY'
                            />
                            {this.validator.message('birthday', birthday, 'required')}
                        </div>
                    </Fieldset>
                </Row>
                <Row title='Contact Details'>
                    <Fieldset label='Address' required>
                        <div className={classes.col}>
                            <TextField
                                name='address'
                                onChange={inputChange}
                                value={address}
                                className={classes.textField}
                                placeholder='Street, City/Town, Province'
                            />
                            {this.validator.message('address', address, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Phone number' required>
                        <div className={classes.col}>
                            <TextField
                                name='phone'
                                onChange={inputChange}
                                value={phone}
                                className={classes.textField}
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'>+260</InputAdornment>
                                }}
                            />
                            {this.validator.message('phone', phone, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Email Address' required>
                        <div className={classes.col}>
                            <TextField
                                name='email'
                                onChange={inputChange}
                                value={email}
                                className={classes.textField}
                                placeholder='Your active Email Address'
                            />
                            {this.validator.message('email', email, 'required|email')}
                        </div>
                    </Fieldset>
                </Row>
                <Row title='Guardian Details' subtitle='(if less than 21)'>
                    <Fieldset label='Full Names'>
                        <TextField
                            name='guardian'
                            onChange={inputChange}
                            value={guardian}
                            className={classes.textField}
                            placeholder='Guardian Full Name'
                        />
                    </Fieldset>
                    <Fieldset label='Guardian Phone'>
                        <TextField
                            name='guardianPhone'
                            onChange={inputChange}
                            value={guardianPhone}
                            className={classes.textField}
                            placeholder='Guardian Phone Number'
                        />
                    </Fieldset>
                </Row>
                <Row title='Additional Details'>
                    <Fieldset label='University/ College' required>
                        <div className={classes.col}>
                            <TextField
                                name='school'
                                onChange={inputChange}
                                value={school}
                                className={classes.textField}
                            />
                            {this.validator.message('school', school, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Major' required>
                        <div className={classes.col}>
                            <TextField
                                name='major'
                                onChange={inputChange}
                                value={major}
                                className={classes.textField}
                            />
                            {this.validator.message('major', major, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Academic Qualification' required>
                        <div className={classes.col}>
                            <Upload name='certificate' files={certificate} onChange={fileChange}/>
                            {this.validator.message('certificate', certificate, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='Acceptance/ Recommendation Letter' required>
                        <div className={classes.col}>
                            <Upload name='letter' files={letter} onChange={fileChange}/>
                            {this.validator.message('acceptance/recommendation', letter, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='NRC' required>
                        <div className={classes.col}>
                            <Upload name='ids' files={ids} multiple onChange={fileChange}/>
                            {this.validator.message('nrc attachment', ids, 'required')}
                        </div>
                    </Fieldset>
                    <Fieldset label='2 Passport Size Photos' required>
                        <div className={classes.col}>
                            <Upload name='photos' files={photos} multiple onChange={fileChange}/>
                            {this.validator.message('passport photos', photos, 'required')}
                        </div>
                    </Fieldset>
                </Row>
                <Row title='Payment'>
                    <Fieldset label='Deposit Slip' required>
                        <div className={classes.col}>
                            <Upload name='payment' files={payment} onChange={fileChange}/>
                            {this.validator.message('deposit slip', payment, 'required')}
                        </div>
                    </Fieldset>
                </Row>
                <Terms/>
                <div className={classes.actions}>
                    <List component='nav'>
                        <ListItem>
                            <ListItemIcon>
                                <Icon name='check' fill={theme.palette.primary.main}/>
                            </ListItemIcon>
                            <ListItemText primary='I agree to the above Terms & Conditions'/>
                        </ListItem>
                    </List>
                    <Button type='submit' color='primary' size='large' variant='contained'>
                        <Typography className={classes.typography}>Submit Application</Typography>
                        <CircularProgress size={20} thickness={4} className={clsx(classes.progress, {[classes.show]: loading})}/>
                    </Button>
                </div>
            </form>
        )
    }
}))