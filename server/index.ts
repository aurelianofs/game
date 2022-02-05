import * as express from 'express'
import { Server } from 'http'
import { WebSocket } from 'ws'
import wsServer from './ws'

const app = express()
const port = 3000

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/test.html');
});

const server: Server = app.listen(port, () => console.log(`Running on port ${port}`))

// WS Actions
wsServer.init( server )

wsServer.onConnect(({ ws }: { ws: WebSocket }) => {
  ws.send(
    JSON.stringify({
      action: 'FIRST_MESSAGE_TEST',
      data: {
        msg: "This is the first message"
      }
    })
  )
})

wsServer.addAction('MESSAGE_TEST', ({ ws }: { ws: WebSocket }) => {
  ws.send(
    JSON.stringify({
      action: 'MESSAGE_TEST_RESPONSE',
      data: {
        msg: "This is a test message response"
      }
    })
  )
})
