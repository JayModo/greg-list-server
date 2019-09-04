import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
    make: { type: String },
    model: { type: String },
    imgUrl: { type: String, default: 'https://placeholder.it/200x200' },
    year: { type: Number },
    price: { type: Number },
    description: { type: String },
}, { timestamps: true })

export default class CarService {
    get repository() {
        return mongoose.model('car', _model)
    }
}