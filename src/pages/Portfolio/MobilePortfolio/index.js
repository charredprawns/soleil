import React from 'react'
import style from './style'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Projects } from 'components'
/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {projects} Object: An array of objects, each of which constitures a project
*/

const MobilePortfolio = ({ classes, projects }) => {
  return (
    <div>
      <Typography>Mobile Portfolio</Typography>
      <Projects projects={projects} />
    </div>
  )
}

MobilePortfolio.propTypes = {
  classes: PropTypes.object,
  projects: PropTypes.array
}

export default withStyles(style)(MobilePortfolio)
