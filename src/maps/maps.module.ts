import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { MapsService } from './maps.service'
import { MapsController } from '././maps.controller'
import { QueueModel } from '../models/models/queue/queue.model'
import { MapsModel } from '../models/models/maps/maps.model'

@Module({
  imports: [
    MongooseModule.forFeature([
      MapsModel
    ])
  ],
  providers: [MapsService],
  controllers: [MapsController],
  exports: [MapsService]
})
export class MapsModule {}
