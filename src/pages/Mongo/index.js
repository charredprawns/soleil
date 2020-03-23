import React, { useEffect, useState } from 'react'
import { req } from 'utils/API'
import styles from './styles'
import { Typography, withStyles } from '@material-ui/core'
import { Listing } from 'components'

const Mongo = ({ classes }) => {
  const [listings, setListings] = useState([])
  useEffect(() => {
    const getListings = async () => {
      const result = await req('GET', '/v1/airbnb/listing', {
        numberOfListings: 25
      })
      if (result.status === 'success') {
        setListings(result)
      }
    }
    getListings()
  }, [])

  return (
    <div className={classes.container}>
      <Typography
        variant='body1'
        align='center'
        className={classes.intro_paragraph}
      >
        This page utilizes mongodb sample data from the mongoDB Atlas free API.
        Below are examples of sample data being used in various React.js
        Components.
      </Typography>

      <div className={classes.listings_grid}>
        {listings &&
          Object.entries(listings)
            .filter(x => x[0] !== 'status')
            .map(listing => {
              return (
                <Listing
                  listingData={listing}
                  className={classes.listing_wrapper}
                />
              )
            })}
      </div>
    </div>
  )
}

export default withStyles(styles)(Mongo)
