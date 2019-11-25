import { Injectable, NotFoundException } from '@nestjs/common'
import { Model } from 'mongoose'
import { ModelsName } from '../enums/database.enum'
import { InjectModel } from '@nestjs/mongoose'
import { IMapsModel, SeasonDTO } from 'twisted-models'

@Injectable()
export class SeasonsService {
  constructor (
    @InjectModel(ModelsName.STATIC_SEASONS) private readonly repository: Model<IMapsModel>
  ) {}

  async create (seasons: SeasonDTO[]) {
    for (const season of seasons) {
      await this.repository.updateOne({ id: season.id }, season, { upsert: true })
    }
  }

  async get (id?: string | number) {
    if (id) {
      const instance = await this.repository.findOne({ id })
      if (!instance) {
        throw new NotFoundException(`Season ${id} not found`)
      }
      return instance
    }
    return this.repository.find()
  }
}
