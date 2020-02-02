import React from 'react'
import style from './style'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
*/

const MobileTemplate = ({ classes }) => {
  return <div />
}

MobileTemplate.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(MobileTemplate)
