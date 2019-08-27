import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Row from './row'

const styles = makeStyles(theme => ({
    ul: {
        marginTop: -36,
        [theme.breakpoints.down('xs')]: {
            marginLeft: -theme.spacing(2)
        }
    },
    li: {
        fontSize: '1rem',
        marginLeft: -20,
        marginBottom: 4
    }
}))

export default () => {
    const classes = styles()

    return <Row title='Terms & Conditions' disableBackground>
        <ul className={classes.ul}>
            <li className={classes.li}>The application fee of k150.00 is non-refundable</li>
            <li className={classes.li}>The bursary is only valid for one academic year/semester but may be renewed on application after production of satisfactory academic results</li>
            <li className={classes.li}>Part of the allowance due to the student is paid to the beneficiary through a bank account as funds become available.</li>
            <li className={classes.li}>The student will not be allowed to change his/her course of studies without the consent of the bursaries board.</li>
            <li className={classes.li}>The board shall cancel the bursary when the student fails exams, is indulged in inappropriate behavior or as the board sees fit in its absolute discretion.</li>
            <li className={classes.li}>The bursary awarded to the student shall not extend to the spouse, children or any other dependent</li>
            <li className={classes.li}>The bursary will be awarded to Zambian citizens between the age of 18 years to 35 years.</li>
            <li className={classes.li}>The applicants will be required to sit for aptitude tests prior to final selection. All applicants who wish to commence in January must submit their applications before the 1st of November while those who submit after the said date will be considered for the June/July intakes.</li>
            <li className={classes.li}>Students who apply for financial aid may be granted a full or partial bursary. This means that a student may be granted a bursary, which covers all or only half their tertiary fees. To cover the remaining half, families can apply for an additional loan. The amount of money you will get depends on your academic performance and your family’s income or financial situation.</li>
        </ul>
    </Row>
}