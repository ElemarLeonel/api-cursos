import Curso from "../model/Curso.js"

const inserir = (req, res) => {

  try{
    const curso = new Curso({
      titulo: req.body.titulo,
      cargaHoraria: req.body.cargaHoraria,
      instrutor: req.body.instrutor,
      tags: req.body.tags
    })

    curso.save()
    .then(r => {
      res.status(201).send(r)
    })
    .catch(e => {
      res.status(400).send(e)
    })
  }catch(erro){
    res.status(500).send(erro)
  }
}

const listarTodos = (req, res) => {
  try{
    Curso.find().then(result => {
      res.status(200).send(result)
    })
  } catch (erro){
    res.status(500).send(erro)
  }
}

const cursoController = {
  inserir,
  listarTodos
}

export default cursoController