import React from 'react'
import style from './style'
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import LockIcon from '@material-ui/icons/Lock'
import PropTypes from 'prop-types'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
*/

const DesktopNavbar = ({ classes }) => {
  return (
    <div className={classes.navWrapper}>
      <AppBar position='fixed'>
        <Toolbar>
          <div className={classes.menuItems}>
            <Button className={classes.menuButton}>
              <HomeIcon fontSize='small' className={classes.menuIcon} />
              <Typography> Home</Typography>
            </Button>
            <Button className={classes.menuButton}>
              <LockIcon fontSize='small' className={classes.menuIcon} />
              <Typography> Login</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

DesktopNavbar.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(DesktopNavbar)
