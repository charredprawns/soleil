import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import DesktopTemplate from './DesktopTemplate'
import MobileTemplate from './MobileTemplate'

const ManagerTemplate = props => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {isDesktop ? (
        <DesktopTemplate {...props} />
      ) : (
        <MobileTemplate {...props} />
      )}
    </>
  )
}

export default ManagerTemplate
