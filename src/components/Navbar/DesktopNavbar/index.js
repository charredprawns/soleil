import React from 'react'
import style from './style'
import PropTypes from 'prop-types'
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import logo from 'assets/LincWebTech.svg'
/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
*/

const DesktopNavbar = ({ classes }) => {
  return (
    <div className={classes.navWrapper}>
      <AppBar position='fixed' classes={{ root: classes.menuBar }}>
        <Toolbar>
          <Link to='/'>
            <img src={logo} alt='linc web tech logo' className={classes.logo} />
          </Link>
          <div className={classes.menuItems}>
            <Link to='/portfolio' className={classes.link}>
              <Button className={classes.menuButton}>
                <Typography>Portfolio</Typography>
              </Button>
            </Link>
            <Link to='/move' className={classes.link}>
              <Button className={classes.menuButton}>
                <Typography>Move</Typography>
              </Button>
            </Link>
            <Link to='/mongo' className={classes.link}>
              <Button className={classes.menuButton}>
                <Typography>Mongo</Typography>
              </Button>
            </Link>
            <Button className={classes.menuButton}>
              <Typography> Blog</Typography>
            </Button>
            <Button className={classes.menuButton}>
              <Typography> Contact</Typography>
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
