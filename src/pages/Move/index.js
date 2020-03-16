import React, { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import DesktopMove from './DesktopMove'
import MobileMove from './MobileMove'

import projects from 'assets/recentProjects'

const Move = props => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [itemX, setItemX] = useState(100)
  const [itemY, setItemY] = useState(100)

  const MOVE_SPACE = 100

  useEffect(() => {
    const handleKeypress = key => {
      const localKey = key.key
      switch (localKey) {
        case 'w':
          console.log(localKey)
          setItemY(itemY - MOVE_SPACE)
          break
        case 'a':
          setItemX(itemX - MOVE_SPACE)
          console.log(localKey)
          break
        case 's':
          setItemY(itemY + MOVE_SPACE)
          console.log(localKey)
          break
        case 'd':
          setItemX(itemX + MOVE_SPACE)
          console.log(localKey)
          break
        default:
          break
      }
    }
    window.addEventListener('keypress', handleKeypress)

    return () => window.removeEventListener('keypress', handleKeypress)
  })

  return (
    <>
      {isDesktop ? (
        <DesktopMove
          {...props}
          projects={projects}
          position={{ itemX, itemY }}
        />
      ) : (
        <MobileMove
          {...props}
          projects={projects}
          position={{ itemX, itemY }}
        />
      )}
    </>
  )
}

export default Move
