import * as express from 'express'
import wsServer from './ws'

const app = express()
const port = 5000

app.get('/', (_, res) => {
  res.status(200).send()
})

app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/test.html');
});

const server = app.listen(port, () => console.log(`Running on port ${port}`))

wsServer.init( server )
