import { Controller, Get, Query } from '@nestjs/common'
import { TftItemsService } from './tft-items.service'
import { QueryStaticData } from '../models/dto/query.static-data.dto'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'
import { StaticTftItemsDTO } from 'twisted-models'

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
