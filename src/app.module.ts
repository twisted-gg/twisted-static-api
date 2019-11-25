import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { RiotApiModule } from './riot-api/riot-api.module'
import { ConfigModule } from './config/config.module'
import { DatabaseConnection } from './database/database.connection'
import { OriginMiddleware } from 'twisted-common'
import { QueuesModule } from './queues/queues.module'
import { MapsModule } from './maps/maps.module'
import { SeasonsModule } from './seasons/seasons.module'
import { TftItemsModule } from './tft-items/tft-items.module'

@Module({
  imports: [
    DatabaseConnection,
    ConfigModule,
    RiotApiModule,
    QueuesModule,
    MapsModule,
    SeasonsModule,
    TftItemsModule
  ]
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer
      .apply(OriginMiddleware)
      .forRoutes('*')
  }
}
