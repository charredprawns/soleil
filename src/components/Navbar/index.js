import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const ManagerTemplate = ({ children, ...props }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {isDesktop ? (
        <>
          <DesktopNavbar {...props} />
          {children}
        </>
      ) : (
        <>
          {children}
          <MobileNavbar {...props} />
        </>
      )}
    </>
  )
}

export default ManagerTemplate
