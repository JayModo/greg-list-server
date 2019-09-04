import express from 'express'
import JobService from '../services/JobService';

let _jobService = new JobService().repository

export default class JobController {
  constructor() {
    this.router = express.Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _jobService.find({})
      return res.send(data)
    } catch (error) { next(error) }

  }

  async getById(req, res, next) {
    try {
      let data = await _jobService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let data = await _jobService.create(req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _jobService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await _jobService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted value")
    } catch (error) { next(error) }

  }

}