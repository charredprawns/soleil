import React, { useEffect, useState } from 'react'
import { req } from 'utils/API'
import styles from './styles'
import { Typography, withStyles, CircularProgress } from '@material-ui/core'
import { Listing } from 'components'

const Mongo = ({ classes }) => {
  const [listings, setListings] = useState(undefined)
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
        Components.{' '}
        <a
          href='https://github.com/lincicomb/soleil/blob/master/src/pages/Mongo/index.js'
          target='_blank'
          rel='noopener noreferrer'
        >
          See code here
        </a>
      </Typography>

      {listings ? (
        <div className={classes.listings_grid}>
          {listings &&
            Object.entries(listings)
              // Remove the status indicator returned from the API
              .filter(x => x[0] !== 'status')
              .map((listing, i) => {
                return (
                  <Listing
                    key={i}
                    listingData={listing}
                    className={classes.listing_wrapper}
                  />
                )
              })}
        </div>
      ) : (
        <div className={classes.progress_wrapper}>
          <CircularProgress size={40} />
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(Mongo)
