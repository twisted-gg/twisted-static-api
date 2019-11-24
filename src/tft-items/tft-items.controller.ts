import { Controller, Get, Query } from '@nestjs/common'
import { TftItemsService } from './tft-items.service'
import { QueryStaticData } from '../models/dto/query.static-data.dto'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'
import { MapsDTO } from '../models/models/maps/maps.dto'
import { StaticTftItemsDTO } from '../models/models/tft-items/tft-items.dto'

@Controller('tft/items')
@ApiUseTags('TFT Items')
export class TftItemsController {
  constructor (
    private readonly service: TftItemsService
  ) {}

  @Get()
  @ApiOkResponse({ type: [StaticTftItemsDTO] })
  @ApiOperation({
    title: 'Get tft items listing'
  })
  async getQueues (@Query() { id }: QueryStaticData) {
    return this.service.get(id)
  }
}
