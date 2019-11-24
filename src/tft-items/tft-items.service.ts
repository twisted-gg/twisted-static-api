import { Injectable, NotFoundException } from '@nestjs/common'
import { QueuesDataDragonDTO } from 'twisted/dist/dto'
import { Model } from 'mongoose'
import { ModelsName } from '../enums/database.enum'
import { InjectModel } from '@nestjs/mongoose'
import { IMapsModel } from '../models/models/maps/maps.interface'
import { StaticTftItemsDTO } from '../models/models/tft-items/tft-items.dto'

@Injectable()
export class TftItemsService {
  constructor (
    @InjectModel(ModelsName.STATIC_TFT_ITEM) private readonly repository: Model<IMapsModel>
  ) {}

  async create (items: StaticTftItemsDTO[]) {
    for (const item of items) {
      await this.repository.updateOne({ id: item.id }, item, { upsert: true })
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
