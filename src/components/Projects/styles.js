export default theme => ({
  container: {
    maxWidth: theme.overrides.maxContentWidth,
    margin: 'auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  project: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectImage: {
    width: '300px',
    height: '150px'
  },
  projectText: {}
})
