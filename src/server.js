import express from 'express'
import cors from 'cors'
import http from 'http'
import {Server} from 'socket.io'

const app = express()

const port = process.env.port || 3005

const serverHttp = http.createServer(app)

app.use(cors({ origin: 'http://localhost:3006' }));

serverHttp.listen(port, () => console.log(`Servidor escutando na porta ${port}`))

app.get('/api/conexao', (req, res) => {
  res.send('Conexão estabelecida com sucesso000000!');
});
  
const io = new Server(serverHttp, {cors: {
    origin: "http://localhost:3006"
  }})

export default io