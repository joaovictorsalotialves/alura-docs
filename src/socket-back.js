import registerEventsDocuments from './registerEvents/documents.js'
import registerEventsRegister from './registerEvents/register.js'
import registerEventsStart from './registerEvents/start.js'
import { io } from './server.js'

io.on('connection', (socket) => {
  registerEventsStart(socket, io)
  registerEventsDocuments(socket, io)
  registerEventsRegister(socket, io)
})
