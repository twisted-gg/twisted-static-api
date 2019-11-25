import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { SeasonsService } from './seasons.service'
import { SeasonsController } from './seasons.controller'
import { SeasonsModel } from 'twisted-models'

@Module({
  imports: [
    MongooseModule.forFeature([
      SeasonsModel
    ])
  ],
  providers: [SeasonsService],
  controllers: [SeasonsController],
  exports: [SeasonsService]
})
export class SeasonsModule {}
