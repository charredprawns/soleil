import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { req } from 'utils/API'

const Home = ({ classes }) => {
  useEffect(() => {
    const getStuff = async () => {
      const result = await req('GET', '/v1/airbnb/listing', {
        numberOfMovies: 10
      })
      console.log(result)
    }

    getStuff()
  }, [])
  return (
    <div>
      <Typography variant='h1' align='center'>
        Welcome to Soliel
      </Typography>
    </div>
  )
}

export default Home
