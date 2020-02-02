import React from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import mainImage from 'assets/goat.jpg'
/**
 *
 * @param {Boolean} shouldSpin Should the spinning animation be active?
 */
const PersonFeature = ({ classes, shouldSpin }) => {
  return (
    <div className={classes.container}>
      <img src={mainImage} className={classes.main_image} alt='MAR' />
      <Typography variant='h1'>
        <b>MAR</b>
      </Typography>
    </div>
  )
}

PersonFeature.propTypes = {
  classes: PropTypes.object
}

PersonFeature.defaultProps = {
  shouldSpin: false
}

export default withStyles(styles)(PersonFeature)
