import * as themes from './themes'
import { createMuiTheme } from '@material-ui/core'

// Constants that can be changed to take affect everywhere
const breakpoints = {
  sm: 709,
  md: 969,
  lg: 1280,
  xl: 1920,
  xs: 400
}
const navHeights = {
  mobile: '2.75em',
  tablet: '2.75em',
  desktop: '3.5em'
}

/**
@param {screenSize} String: Used to override colors based on the size of the screen i.e. mobile, tablet, desktop
@param {themeName} String: The string name of the theme. i.e. 'conformity' for the v1
*/
export default ({ themeName, screenSize }) => {
  const navHeight = navHeights[screenSize]
  return createMuiTheme({
    mobile: `@media only screen and (max-width: ${breakpoints.sm}px)`,
    tablet: `@media only screen and (max-width: ${breakpoints.md}px)`,
    maxContentWidth: '1440px',
    mobileThreshold: breakpoints.sm,
    tabletThreshold: breakpoints.md,
    bodyHeight:
      'calc(100vh - ' +
      navHeight +
      ' - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
    bodyWithNavHeight:
      'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
    topNotchHeight: 'env(safe-area-inset-top)',
    bottomNotchHeight: 'env(safe-area-inset-bottom)',
    navHeight,
    palette: {
      // Get the colors based off of the theme
      primary: {
        main: themes[themeName][screenSize].Primary
          ? themes[themeName][screenSize].Primary
          : themes[themeName].Primary
      },
      secondary: {
        main: themes[themeName][screenSize].Secondary
          ? themes[themeName][screenSize].Secondary
          : themes[themeName].Secondary
      }
    },
    overrides: {
      ...themes[themeName],
      ...themes[themeName][screenSize],
      desktop: undefined,
      tablet: undefined,
      mobile: undefined,
      screenSize,
      MuiButton: {
        containedSecondary: {
          color: 'white',
          textTransform: 'capitalize'
        }
      }
    },
    breakpoints: {
      values: breakpoints
    },
    typography: { useNextVariants: true }
  })
}
