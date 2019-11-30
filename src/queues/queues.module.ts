import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { QueuesService } from './queues.service'
import { QueuesController } from './queues.controller'
import { QueueModel } from '@twisted.gg/models'

@Module({
  imports: [
    MongooseModule.forFeature([
      QueueModel
    ])
  ],
  providers: [QueuesService],
  controllers: [QueuesController],
  exports: [QueuesService]
})
export class QueuesModule {}
