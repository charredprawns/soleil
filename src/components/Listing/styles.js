export default theme => ({
  container: {
    padding: '1em',
    boxSizing: 'border-box',
    margin: '1em',
    display: 'flex',
    flexDirection: 'column'
  },

  grid_info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridColumnGap: '0.5em',
    marginBottom: '1em',
    maxWidth: '10em',
    margin: 'auto'
  },
  grid_item: {
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    paddingLeft: '0.25em',
    boxSizing: 'border-box'
  },
  link: {
    marginTop: 'auto'
  },
  title: {
    marginTop: '0.5em',
    fontSize: '1em',
    fontWeight: 'bold'
  }
})
