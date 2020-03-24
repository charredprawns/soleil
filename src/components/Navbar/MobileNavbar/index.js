import React, { useState } from 'react'
import style from './style'
import PropTypes from 'prop-types'
import { IconButton, Menu, MenuItem, withStyles } from '@material-ui/core'
import { withRouter } from 'react-router'

import MenuIcon from '@material-ui/icons/Menu'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {history} Object: Used for history navigation. Injected by withRouter() HOC
*/

const MobileNavbar = ({ classes, history }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true)
  }

  const handleNavClick = target => {
    setOpen(false)
    history.push(target)
  }
  return (
    <div>
      <IconButton
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        className={classes.menu_button}
      >
        <MenuIcon />
      </IconButton>
      <Menu id='simple-menu' keepMounted open={open} onClose={handleClick}>
        <MenuItem onClick={() => handleNavClick('/portfolio')}>
          Portfolio
        </MenuItem>
        <MenuItem onClick={() => handleNavClick('/move')}>Move</MenuItem>
        <MenuItem onClick={() => handleNavClick('/mongo')}>Mongo</MenuItem>
      </Menu>
    </div>
  )
}

MobileNavbar.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
}

export default withStyles(style)(withRouter(MobileNavbar))
