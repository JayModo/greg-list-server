import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  style: { type: String },
  sqft: { type: String },
  imgUrl: { type: String, default: 'https://placeholder.it/200x200' },
  houseYear: { type: Number },
  price: { type: Number },
  description: { type: String },
}, { timestamps: true })

export default class HouseService {
  get repository() {
    return mongoose.model('house', _model)
  }
}