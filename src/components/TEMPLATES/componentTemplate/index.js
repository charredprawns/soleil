import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const EXAMPLE = ({ classes }) => {
  return <div>Change me</div>
}

EXAMPLE.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(EXAMPLE)
