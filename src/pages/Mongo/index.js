import React from 'react'
import styles from './styles'
import { Typography, withStyles } from '@material-ui/core'

const Mongo = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography
        variant='body-1'
        align='center'
        className={classes.intro_paragraph}
      >
        This page utilizes mongodb sample data from the mongoDB Atlas free API.
        Below are examples of sample data being used in varipous React.js
        Components.
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Mongo)
