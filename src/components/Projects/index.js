import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {projects} Object: An array of objects, each of which constitures a project
*/
const Projects = ({ classes, projects }) => {
  const placeholder = 'https://via.placeholder.com/300x150.png?text='
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {projects.map((project, i) => {
          return (
            <div key={i} className={classes.project}>
              <img
                src={`${placeholder}+${project.name}`}
                alt='placeholder'
                className={classes.projectImage}
              />
              <div className={classes.projectText}>
                <Typography variant='h5'>{project.name}</Typography>
                <Typography variant='body1'>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.url}
                  </a>
                </Typography>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Projects)
