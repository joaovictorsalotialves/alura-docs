import express from 'express'
import url from "url"
import path from "path"
import http from 'http'
import { Server } from "socket.io"

const app = express()
const port = process.env.SERVER_PORT || 3000 

const currentPath = url.fileURLToPath(import.meta.url)
const publicPath = path.join(currentPath, '../../public')

app.use(express.static(publicPath))

const serverHttp = http.createServer(app)

serverHttp.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export const io = new Server(serverHttp)
