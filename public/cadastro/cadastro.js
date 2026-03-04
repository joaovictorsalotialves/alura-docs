import { registerUser } from "./socket-front-cadastro.js"

const form = document.getElementById("form-cadastro")

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const usuario = form["input-usuario"].value
  const password = form["input-senha"].value

  registerUser({ usuario, password })
})
