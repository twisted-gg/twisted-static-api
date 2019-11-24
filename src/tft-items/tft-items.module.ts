import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { TftItemsService } from './tft-items.service'
import { TftItemsController } from './tft-items.controller'
import { QueueModel } from '../models/models/queue/queue.model'
import { MapsModel } from '../models/models/maps/maps.model'
import { StaticTftItemsModel } from '../models/models/tft-items/tft-items.model'

@Module({
  imports: [
    MongooseModule.forFeature([
      StaticTftItemsModel
    ])
  ],
  providers: [TftItemsService],
  controllers: [TftItemsController],
  exports: [TftItemsService]
})
export class TftItemsModule {}
