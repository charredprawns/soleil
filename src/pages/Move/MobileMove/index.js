import React from 'react'
import style from './style'
import { withStyles, Typography, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import item from 'assets/middle.gif'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {styles} Object: An object with styles computed for the item moving
@param {handleUpMove} Function: A function for handling movement up
@param {handleDownMove} Function: A function for handling movement down
@param {handleLeftMove} Function: A function for handling movement left
@param {handleRightMove} Function: A function for handling movement right
*/

const MobileMove = ({
  classes,
  styles,
  handleUpMove,
  handleDownMove,
  handleLeftMove,
  handleRightMove
}) => {
  return (
    <div>
      <Typography align='center'>Mobile Move</Typography>
      <img src={item} alt='item controlled by keys' className={styles.item} />
      <div className={classes.mobile_button_bar}>
        <IconButton aria-label='up' onClick={handleUpMove}>
          <ExpandLessIcon />
        </IconButton>
        <IconButton aria-label='down' onClick={handleDownMove}>
          <KeyboardArrowDownIcon />
        </IconButton>
        <IconButton aria-label='left' onClick={handleLeftMove}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label='right' onClick={handleRightMove}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    </div>
  )
}

MobileMove.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  handleRightMove: PropTypes.func,
  handleLeftMove: PropTypes.func,
  handleDownMove: PropTypes.func,
  handleUpMove: PropTypes.func
}

export default withStyles(style)(MobileMove)
