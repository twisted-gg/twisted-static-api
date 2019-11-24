import { Injectable, NotFoundException } from '@nestjs/common'
import { Model } from 'mongoose'
import { ModelsName } from '../enums/database.enum'
import { InjectModel } from '@nestjs/mongoose'
import { IMapsModel } from '../models/models/maps/maps.interface'
import { MapsDTO } from '../models/models/maps/maps.dto'

@Injectable()
export class MapsService {
  constructor (
    @InjectModel(ModelsName.STATIC_MAPS) private readonly repository: Model<IMapsModel>
  ) {}

  async create (maps: MapsDTO[]) {
    for (const map of maps) {
      await this.repository.updateOne({ mapId: map.mapId }, map, { upsert: true })
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
