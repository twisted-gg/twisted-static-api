import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { MapsService } from './maps.service'
import { MapsController } from '././maps.controller'
import { MapsModel } from '@twisted.gg/models'

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
