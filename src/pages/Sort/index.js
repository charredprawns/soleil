import React, { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import DesktopSort from './DesktopSort'
import MobileSort from './MobileSort'

import { dataGenerator } from 'utils/data'

const Move = props => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const data = dataGenerator('int', 100)

  console.log(data)

  return (
    <>{isDesktop ? <DesktopSort {...props} /> : <MobileSort {...props} />}</>
  )
}

export default Move
