import mongoose from "mongoose"

const CursoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  cargaHoraria: {
    type: Number,
    required: true
  },
  instrutor: {
    type: String,
  },
  tags: [{
    type: String,
  }]
})

const Curso = mongoose.model('cursos', CursoSchema)

export default Curso