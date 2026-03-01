import registerEventsDocuments from './registerEvents/registerEventsDocuments.js'
import registerEventsStart from './registerEvents/registerEventsStart.js'
import { io } from './server.js'

io.on('connection', (socket) => {
  registerEventsStart(socket, io)
  registerEventsDocuments(socket, io)
})
