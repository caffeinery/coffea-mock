import { forward } from 'coffea'
import makeCommands from './commands'

export default function mock (config, dispatch) {
  const commands = makeCommands(config, dispatch)
  return forward(commands)
}
