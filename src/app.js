import express from "express"
import connection from "./config/database.js"
import cursoRouter from "./routes/cursos.js"

connection
  .then(() => console.log('MongoDB conectado'))
  .catch(erro => console.log(erro))

const app = express()
app.use(express.json())

// Importando as rotas
app.use('/', cursoRouter)

app.get('/ping', (req, res) => {
  res.status(200)
  res.send({"resposta": "pong"})
})

export default app