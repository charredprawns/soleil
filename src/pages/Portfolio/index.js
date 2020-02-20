import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import DesktopPortfolio from './DesktopPortfolio'
import MobilePortfolio from './MobilePortfolio'

import projects from 'assets/recentProjects'

const Portfolio = props => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {isDesktop ? (
        <DesktopPortfolio {...props} projects={projects} />
      ) : (
        <MobilePortfolio {...props} projects={projects} />
      )}
    </>
  )
}

export default Portfolio
