const defaultMessageHandler = (event) =>
  console.log('[coffea-mock] message event received:', event)

export default function makeCommands (mockConfig, dispatch) {
  return {
    // mock sending events
    'mock': ({ event }) => dispatch(event),

    // mock receiving message events
    'message': typeof mockConfig.message === 'function'
      ? mockConfig.message
      : defaultMessageHandler
  }
}
