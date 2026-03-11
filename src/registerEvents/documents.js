import { findDocument, updateDocument, deleteDocument } from '../db/documentsDb.js'
import { addConection, getUsersInDocument, removeConection, findConection } from '../utils/conectionsDocuments.js'

export default function registerEventsDocuments(socket, io) {
  socket.on('select_document', async ({ nameDocument, username }, returnText) => {
    const document = await findDocument(nameDocument)

    if (document) {
      const conectionExisting = findConection(nameDocument, username)

      if (!conectionExisting) {
        socket.join(nameDocument)

        addConection({ nameDocument, username })

        socket.data = {
          userIn: true
        }

        const usersInDocument = getUsersInDocument(nameDocument)

        io.to(nameDocument).emit('users_in_document', usersInDocument)

        returnText(document.text)
      } else {
        socket.emit('user_is_already_document')
      }
    }

    socket.on('text_change', async ({ text, nameDocument }) => { 
      const update = await updateDocument(nameDocument, text)

      if (update.modifiedCount) {
        socket.to(nameDocument).emit('text_change_client', text)
      }
    })

    socket.on('delete_document', async (nameDocument) => {
      const result = await deleteDocument(nameDocument)

      if (result.deletedCount) {
        io.emit('delete_document_success', nameDocument)
      }
    })

    socket.on('disconnect', () => {
      if (socket.data.userIn) {
        removeConection(nameDocument, username)
  
        const usersInDocument = getUsersInDocument(nameDocument)
  
        io.to(nameDocument).emit('users_in_document', usersInDocument)
      }
    })
  })
}
