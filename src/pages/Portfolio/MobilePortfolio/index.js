import React from 'react'
import style from './style'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
*/

const MobilePortfolio = ({ classes }) => {
  return (
    <div>
      <Typography>Mobile Portfolio</Typography>
    </div>
  )
}

MobilePortfolio.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(MobilePortfolio)
