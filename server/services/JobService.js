import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  title: { type: String },
  company: { type: String },
  rate: { type: Number },
  description: { type: String },
}, { timestamps: true })

export default class CarService {
  get repository() {
    return mongoose.model('Job', _model)
  }
}