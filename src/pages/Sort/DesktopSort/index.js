import React from 'react'
import style from './style'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)

*/

const DesktopSort = ({ classes }) => {
  return (
    <div>
      <Typography variant='h4' align='center' className={classes.title}>
        Sort
      </Typography>
    </div>
  )
}

DesktopSort.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(DesktopSort)
