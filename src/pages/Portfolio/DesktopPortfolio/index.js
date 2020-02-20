import React from 'react'
import style from './style'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Projects } from 'components'
/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {projects} Object: An array of objects, each of which constitures a project
*/

const DesktopPortfolio = ({ classes, projects }) => {
  return (
    <div>
      <Typography>Desktop Portfolio</Typography>
      <Projects projects={projects} />
    </div>
  )
}

DesktopPortfolio.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(DesktopPortfolio)
