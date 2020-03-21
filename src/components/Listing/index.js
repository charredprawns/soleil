import React from 'react'
import styles from './styles'
import { Paper, Typography, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {listingData} Object: Data about a listing
@param {className} String: Wrapping class for component
*/

const Listing = ({ classes, listingData, className }) => {
  return (
    <Paper elevation={5} className={clsx(classes.container, className)}>
      <Typography variant='h5' className={classes.text}>
        {listingData[1].name}
      </Typography>
      <Typography paragraph className={classes.text}>
        {listingData[1].summary}
      </Typography>

      <div className={classes.grid_info}>
        <Typography className={classes.text}>
          {listingData[1].accommodates} guests
        </Typography>
        <Typography className={classes.text}>
          {listingData[1].beds} beds
        </Typography>
        <Typography className={classes.text}>
          {listingData[1].bedrooms} bedrooms
        </Typography>
        <Typography className={classes.text}>
          {listingData[1].bathrooms} bathrooms
        </Typography>
      </div>
    </Paper>
  )
}

Listing.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Listing)
