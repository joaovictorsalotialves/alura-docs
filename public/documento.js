const socket = io()

const textArea = document.getElementById('editor-texto')

textArea.addEventListener('keyup', () => {
  socket.emit('text_change', textArea.value)
})

socket.on('text_change_client', (text) => {
  textArea.value = text
})
