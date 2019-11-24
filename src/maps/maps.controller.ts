import { Controller, Get, Query } from '@nestjs/common'
import { MapsService } from './maps.service'
import { QueryStaticData } from '../models/dto/query.static-data.dto'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'
import { MapsDTO } from '../models/models/maps/maps.dto'

@Controller('maps')
@ApiUseTags('Maps')
export class MapsController {
  constructor (
    private readonly service: MapsService
  ) {}

  @Get()
  @ApiOkResponse({ type: [MapsDTO] })
  @ApiOperation({
    title: 'Get maps listing'
  })
  async getQueues (@Query() { id }: QueryStaticData) {
    return this.service.get(id)
  }
}
