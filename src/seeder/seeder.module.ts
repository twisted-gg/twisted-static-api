import { Module } from '@nestjs/common'
import { SeederService } from './seeder.service'
import { RiotApiModule } from '../riot-api/riot-api.module'
import { DatabaseConnection } from '../database/database.connection'
import { QueuesModule } from '../queues/queues.module'
import { MapsModule } from '../maps/maps.module'
import { TftItemsModule } from '../tft-items/tft-items.module'
import { SeasonsModule } from '../seasons/seasons.module'

@Module({
  imports: [
    DatabaseConnection,
    RiotApiModule,
    QueuesModule,
    MapsModule,
    TftItemsModule,
    SeasonsModule
  ],
  providers: [SeederService],
  exports: [SeederService]
})
export class SeederModule {}
