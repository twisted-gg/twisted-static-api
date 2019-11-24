import { Injectable, Logger } from '@nestjs/common'
import { RiotApiService } from '../riot-api/riot-api.service'
import { QueuesService } from '../queues/queues.service'
import { SeasonsService } from '../seasons/seasons.service'
import { MapsService } from '../maps/maps.service'
import { TftItemsService } from '../tft-items/tft-items.service'

const context = 'SEED'

@Injectable()
export class SeederService {
  private readonly api = this.riot.getLolApi().DataDragon
  private readonly tftApi = this.riot.getTftApi().StaticFiles

  constructor (
    private readonly queuesService: QueuesService,
    private readonly seasonsService: SeasonsService,
    private readonly mapsService: MapsService,
    private readonly tftItemsService: TftItemsService,
    private readonly riot: RiotApiService
  ) {}

  // Internal methods
  private async seasons () {
    try {
      const seasons = await this.api.getSeasons()
      await this.seasonsService.create(seasons)
      Logger.log('Seasons finish', context)
    } catch (e) {
      Logger.error(e, context)
    }
  }

  private async maps () {
    try {
      const maps = await this.api.getMaps()
      await this.mapsService.create(maps)
      Logger.log('Maps finish', context)
    } catch (e) {
      Logger.error(e, context)
    }
  }

  private async queues () {
    try {
      const queues = await this.api.getQueues()
      await this.queuesService.create(queues)
      Logger.log('Queues finish', context)
    } catch (e) {
      Logger.error(e, context)
    }
  }

  private async tftItems () {
    try {
      const items = this.tftApi.Items()
      await this.tftItemsService.create(items)
      Logger.log('Tft items finish', context)
    } catch (e) {
      Logger.error(e, context)
    }
  }

  // Public
  async seed () {
    await this.queues()
    await this.seasons()
    await this.maps()
    await this.tftItems()
  }
}
