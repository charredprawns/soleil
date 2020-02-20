import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import DesktopPortfolio from './DesktopPortfolio'
import MobilePortfolio from './MobilePortfolio'

const Portfolio = props => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {isDesktop ? (
        <DesktopPortfolio {...props} />
      ) : (
        <MobilePortfolio {...props} />
      )}
    </>
  )
}

export default Portfolio
