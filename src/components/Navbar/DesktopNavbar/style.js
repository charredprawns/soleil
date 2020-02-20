export default theme => ({
  menuBar: {
    background: theme.overrides.White
  },
  logo: {
    width: '150px',
    padding: '0.5em'
  },
  navWrapper: {
    marginBottom: '64px'
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  menuButton: {
    padding: '10px',
    textTransform: 'Capitalize'
  },
  link: {
    textDecoration: 'none !important'
  },
  menuIcon: {
    paddingRight: '0.25em'
  }
})
