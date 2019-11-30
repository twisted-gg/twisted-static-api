import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { TftItemsService } from './tft-items.service'
import { TftItemsController } from './tft-items.controller'
import { StaticTftItemsModel } from '@twisted.gg/models'
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
