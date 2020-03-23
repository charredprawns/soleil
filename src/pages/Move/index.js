import React, { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
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

const Move = props => {
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
    window.addEventListener('keypress', handleKeypress)

    return () => window.removeEventListener('keypress', handleKeypress)
  })

  const styles = useStyles({ itemX, itemY })

  return (
    <>
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

export default Move
