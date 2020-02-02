export default theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      placeItems: 'center',
      margin: '2em'
    },
    main_image: {
      width: '25em',
      animation: props => {
        console.log(props.shouldSpin)
        return props.shouldSpin ? '$rotating 10s linear infinite' : ''
      },
      // animation: '$rotating 10s linear infinite',

      marginRight: '2em'
    },
    '@keyframes rotating': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    }
  }
}
