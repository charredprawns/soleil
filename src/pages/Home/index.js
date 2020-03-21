import React from 'react'
import styles from './styles'
import { Typography, withStyles } from '@material-ui/core'

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography
        variant='body-1'
        align='center'
        className={classes.intro_paragraph}
      >
        On this website you will find many things. You will find a portfolio of
        my previous work, as well as one-off implementations of ideas I've had
        over time.
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Home)
