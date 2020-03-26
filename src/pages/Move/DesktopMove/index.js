import React from 'react'
import style from './style'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import item from 'assets/middle.gif'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {styles} Object: An object with styles computed for the item moving
*/

const DesktopMove = ({ classes, styles }) => {
  return (
    <div>
      <img src={item} alt='item controlled by keys' className={styles.item} />
    </div>
  )
}

DesktopMove.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(DesktopMove)
