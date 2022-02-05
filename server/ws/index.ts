import { Server } from 'http';
import { Server as WsServer, WebSocket } from 'ws'


interface actionList {
  [key: string]: Function
}

const actions: actionList = {}
let idCount = 0;

let onConnectCallback: Function;
const onConnect = (fn: Function) => {
  onConnectCallback = fn;
}

const handleConnection = (ws: WebSocket) => {
  const id = idCount++;
  console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), `New device connected. ID: ${id}`);

  onConnectCallback({ ws, id })

  ws.on('message', function(msg: string) {
    const { action, data } = JSON.parse(msg);

    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), action, data);

    if( actions[ action ] ) {
      actions[ action ]({
        action,
        data,
        ws,
        id
      })
    }
  })

  ws.on('close', () => {
    console.log(`Connection closed. ID: ${id}`)
  })
}

const init = (server: Server) => {
  const wss = new WsServer({ server })
  wss.on('connection', handleConnection)
}

const addAction = (key: string, fn: Function) => {
  actions[ key ] = fn;
}

export default {
  init,
  addAction,
  onConnect,
}
