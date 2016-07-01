export default function makeCommands (dispatch) {
  return {
    'mock': ({ event }) => dispatch(event)
  }
}
