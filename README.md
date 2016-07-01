# coffea-mock

_mock protocol for unit tests, protocol independent development and more with
[coffea 1.0-beta](https://github.com/caffeinery/coffea/tree/1.0-beta)_


## Setup

 * Make sure to use the latest *beta* version of coffea by running: `npm install --save coffea@beta`
 * Install `coffea-mock`: `npm install coffea-mock`


## Usage

Specify the `mock` protocol in your network config:

```js
{
  "protocol": "mock"
}
```

coffea will automatically load `coffea-mock` when it's needed! Thus, using mock (or other protocols) this way should work on **any** coffea project, **without any tweaks** (other than installing `coffea-mock` and specifying the config).


## API

Mocking an event:

```js
networks.send({
  type: 'mock',
  event: {
    type: 'message',
    chat: 'chat_id',
    text: 'hello world!'
  }
})
```

Mocking an event using a helper function:

```js
import { message } from 'coffea'

networks.send({
  type: 'mock',
  event: message('chat_id', 'hello world!')
})
```
