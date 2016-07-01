import { forward } from 'coffea'
import makeCommands from './commands'

export default function mock (config, dispatch) {
  const commands = makeCommands(config && config.mock, dispatch)
  return forward(commands)
}
