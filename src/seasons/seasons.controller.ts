import { Controller, Get, Query } from '@nestjs/common'
import { QueryStaticData } from '../models/dto/query.static-data.dto'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'
import { SeasonsService } from './seasons.service'
import { SeasonDTO } from '@twisted.gg/models'

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
