import { authenticateUser } from "./socket-front-login.js"

const form = document.getElementById("form-login")

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const username = form["input-usuario"].value
  const password = form["input-senha"].value

  authenticateUser({ username, password })
})
