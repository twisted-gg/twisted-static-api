import { Injectable, NotFoundException } from '@nestjs/common'
import { QueuesDataDragonDTO } from 'twisted/dist/dto'
import { Model } from 'mongoose'
import { ModelsName } from '../enums/database.enum'
import { InjectModel } from '@nestjs/mongoose'
import { IQueueModel } from 'twisted-models'

@Injectable()
export class QueuesService {
  constructor (
    @InjectModel(ModelsName.STATIC_QUEUES) private readonly repository: Model<IQueueModel>
  ) {}

  async create (queues: QueuesDataDragonDTO[]) {
    for (const queue of queues) {
      await this.repository.updateOne({ queueId: queue.queueId }, queue, { upsert: true })
    }
  }

  async get (queueId?: string | number) {
    if (queueId) {
      const instance = await this.repository.findOne({ queueId })
      if (!instance) {
        throw new NotFoundException(`Queue ${queueId} not found`)
      }
      return instance
    }
    return this.repository.find()
  }
}
