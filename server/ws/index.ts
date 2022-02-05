import { Server } from 'ws'

const actions = {}
let idCount = 0;

const handleConnection = ws => {
  const id = idCount++;
  console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), `New device connected. ID: ${id}`);

  ws.on('message', function(msg) {
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

const init = server => {
  const wss = new Server({ server })
  wss.on('connection', handleConnection)
}

const addAction = (key, fn) => {
  actions[ key ] = fn;
}

export default {
  init,
  addAction,
}
