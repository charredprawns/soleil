import React, { useState, useEffect } from 'react'
import style from './DesktopMove/style'
import {
  useTheme,
  useMediaQuery,
  withStyles,
  Typography
} from '@material-ui/core'
import DesktopMove from './DesktopMove'
import MobileMove from './MobileMove'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(props => ({
  item: props => {
    return {
      position: 'absolute',
      left: props.itemX,
      top: props.itemY
    }
  }
}))

const Move = ({ classes, ...props }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [itemX, setItemX] = useState(window.innerWidth / 2)
  const [itemY, setItemY] = useState(window.innerHeight / 2)

  const MOVE_SPACE = 25
  const BUFFER_SPACE = 25
  const MAX_X = window.innerWidth - BUFFER_SPACE
  const MAX_Y = window.innerHeight - BUFFER_SPACE
  const MIN_X = 0
  const MIN_Y = 0

  const isGoodToMovePlusDirection = (maxValue, currentValue, moveSpace) =>
    currentValue + moveSpace < maxValue - 1

  const isGoodToMoveMinusDirection = (minValue, currentValue, moveSpace) =>
    currentValue - moveSpace > minValue

  const handleUpMove = () => {
    if (isGoodToMoveMinusDirection(MIN_Y, itemY, MOVE_SPACE))
      setItemY(itemY - MOVE_SPACE)
  }
  const handleDownMove = () => {
    if (isGoodToMovePlusDirection(MAX_Y, itemY, MOVE_SPACE))
      setItemY(itemY + MOVE_SPACE)
  }
  const handleLeftMove = () => {
    if (isGoodToMoveMinusDirection(MIN_X, itemX, MOVE_SPACE))
      setItemX(itemX - MOVE_SPACE)
  }
  const handleRightMove = () => {
    if (isGoodToMovePlusDirection(MAX_X, itemX, MOVE_SPACE))
      setItemX(itemX + MOVE_SPACE)
  }

  useEffect(() => {
    const handleKeypress = key => {
      const localKey = key.key
      switch (localKey) {
        case 'w':
          handleUpMove()
          break
        case 'a':
          handleLeftMove()
          break
        case 's':
          handleDownMove()
          break
        case 'd':
          handleRightMove()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeypress)

    return () => window.removeEventListener('keydown', handleKeypress)
  })

  const styles = useStyles({ itemX, itemY })

  return (
    <>
      <div>
        {' '}
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
              - This allows for the X, and Y coordinates of the DOM element of
              the image to be changed in CSS via prop injection.
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
            <li>
              {' '}
              <a
                href='https://github.com/lincicomb/soleil/blob/master/src/pages/Move/index.js'
                target='_blank'
                rel='noopener noreferrer'
              >
                See code here
              </a>
            </li>
          </ul>
        </Typography>
      </div>
      {isDesktop ? (
        <DesktopMove {...props} position={{ itemX, itemY }} styles={styles} />
      ) : (
        <MobileMove
          {...props}
          position={{ itemX, itemY }}
          styles={styles}
          handleUpMove={handleUpMove}
          handleDownMove={handleDownMove}
          handleLeftMove={handleLeftMove}
          handleRightMove={handleRightMove}
        />
      )}
    </>
  )
}

export default withStyles(style)(Move)
