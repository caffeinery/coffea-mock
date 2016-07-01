export default function makeCommands (config, dispatch) {
  return {
    'mock': ({ event }) => dispatch(event),

    // TODO: make this mock function customizable
    'message': (event) => console.log('message event received:', event)
  }
}
