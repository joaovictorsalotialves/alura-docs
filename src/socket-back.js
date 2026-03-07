import 'dotenv/config'

import registerEventsDocuments from './registerEvents/documents.js'
import registerEventsRegister from './registerEvents/register.js'
import registerEventsStart from './registerEvents/start.js'
import registerEventsLogin from './registerEvents/login.js'

import authorizeUser from './middlewares/authorizeUser.js'

import { io } from './server.js'

const nspUsers = io.of('/users')

nspUsers.use(authorizeUser)

nspUsers.on('connection', (socket) => {
  registerEventsStart(socket, nspUsers)
  registerEventsDocuments(socket, nspUsers)
})

io.of('/').on('connection', (socket) => {
  registerEventsLogin(socket, io)
  registerEventsRegister(socket, io)
})
