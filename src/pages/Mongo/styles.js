export default theme => ({
  container: {
    boxSizing: 'border-box',
    margin: '1em'
  },
  intro_paragraph: {
    boxSizing: 'border-box',
    padding: '1em'
  },
  listings_grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  progress_wrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  [theme.tablet]: {
    listings_grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  },
  [theme.mobile]: {
    listings_grid: {
      display: 'grid',
      gridTemplateColumns: '1fr'
    }
  }
})
