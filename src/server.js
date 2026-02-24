import express from 'express'
import url from "url"
import path from "path"

const app = express()
const port = process.env.SERVER_PORT || 3000 

const currentPath = url.fileURLToPath(import.meta.url)
const publicPath = path.join(currentPath, '../../public')

app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
