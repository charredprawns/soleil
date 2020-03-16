import React from 'react'
import style from './style'
import { withStyles, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import item from 'assets/middle.gif'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {position} Object: An object with and x and y values for position
*/

const useStyles = makeStyles(props => ({
  item: props => {
    console.log(props)
    return {
      position: 'absolute',
      left: props.position.itemX,
      top: props.position.itemY
    }
  }
}))

const DesktopMove = ({ classes, position }) => {
  console.log(position)
  const styles = useStyles({ position })
  return (
    <div>
      <Typography variant='h4' align='center' className={classes.title}>
        Move
      </Typography>
      <img src={item} alt='item controlled by keys' className={styles.item} />
    </div>
  )
}

DesktopMove.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(DesktopMove)
