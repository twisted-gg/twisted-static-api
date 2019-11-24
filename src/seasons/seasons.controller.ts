import { Controller, Get, Query } from '@nestjs/common'
import { QueryStaticData } from '../models/dto/query.static-data.dto'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'
import { MapsDTO } from '../models/models/maps/maps.dto'
import { SeasonDTO } from '../models/models/seasons/seasons.dto'
import { SeasonsService } from './seasons.service'

@Controller('seasons')
@ApiUseTags('Seasons')
export class SeasonsController {
  constructor (
    private readonly service: SeasonsService
  ) {}

  @Get()
  @ApiOkResponse({ type: [SeasonDTO] })
  @ApiOperation({
    title: 'Get seasons listing'
  })
  async getQueues (@Query() { id }: QueryStaticData) {
    return this.service.get(id)
  }
}
