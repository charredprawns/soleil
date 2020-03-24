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
      <Typography variant='h4' align='center' className={classes.title}>
        Move
      </Typography>
      <Typography align='center'>
        Use the keys W,A,S,D to move the icon around the screen. To achieve
        this. There are three primary features used.
      </Typography>
      <Typography>
        <ul>
          <li>
            <a
              href='https://material-ui.com/styles/basics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Material ui's makeStyles Hook
            </a>{' '}
            - This allows for the X, and Y coordinates of the DOM element of the
            image to be changed in CSS via prop injection.
          </li>
          <li>
            <a
              href='https://reactjs.org/docs/hooks-effect.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              The React UseEffect hook{' '}
            </a>
            - This is sort-of the magic that allows dom updates via prop
            updates.
          </li>
          <li>
            And lastly some{' '}
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event'
              target='_blank'
              rel='noopener noreferrer'
            >
              keydown event listeners{' '}
            </a>{' '}
            (back to the basics)
          </li>
        </ul>
      </Typography>
      <img src={item} alt='item controlled by keys' className={styles.item} />
    </div>
  )
}

DesktopMove.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(DesktopMove)
