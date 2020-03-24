import React from 'react'
import styles from './styles'
import { Paper, Typography, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { addEllipses } from 'utils'

import PeopleIcon from '@material-ui/icons/People'
import HotelIcon from '@material-ui/icons/Hotel'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import BathtubIcon from '@material-ui/icons/Bathtub'

/**
@param {classes} Object: Used to define style classes. DOCUMENT YOUR CODE! :)
@param {listingData} Object: Data about a listing
@param {className} String: Wrapping class for component
*/

const IconWithNumber = ({ classes, icon, data }) => {
  return (
    <Typography className={clsx(classes.text, classes.grid_item)}>
      {data} {icon}
    </Typography>
  )
}

const Listing = ({ classes, listingData, className }) => {
  const placeholder = 'https://source.unsplash.com/random/300x150'
  return (
    <Paper elevation={5} className={clsx(classes.container, className)}>
      <img alt='random from unsplash' src={placeholder} />
      <Typography
        paragraph
        align='center'
        variant='h5'
        className={classes.title}
      >
        {listingData[1].name}
      </Typography>
      <div className={classes.grid_info}>
        <IconWithNumber
          classes={classes}
          icon={<PeopleIcon className={classes.icon} />}
          data={listingData[1].accommodates}
        />
        <IconWithNumber
          classes={classes}
          icon={<HotelIcon className={classes.icon} />}
          data={listingData[1].beds}
        />
        <IconWithNumber
          classes={classes}
          icon={<MeetingRoomIcon className={classes.icon} />}
          data={listingData[1].bedrooms}
        />
        <IconWithNumber
          classes={classes}
          icon={<BathtubIcon className={classes.icon} />}
          data={listingData[1].bathrooms}
        />
      </div>
      <Typography paragraph className={classes.text}>
        {addEllipses(listingData[1].summary, 105)}
      </Typography>

      <a
        href={listingData[1].listing_url}
        target='_blank'
        rel='noopener noreferrer'
        className={classes.link}
      >
        <Typography align='right'>See Actual Listing</Typography>
      </a>
    </Paper>
  )
}

Listing.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Listing)
