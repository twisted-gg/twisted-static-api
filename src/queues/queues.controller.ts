import { Controller, Get, Query } from '@nestjs/common'
import { QueuesService } from './queues.service'
import { QueueDTO } from '../models/models/queue/queue.dto'
import { QueryStaticData } from '../models/dto/query.static-data.dto'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'

@Controller('queues')
@ApiUseTags('Queues')
export class QueuesController {
  constructor (
    private readonly service: QueuesService
  ) {}

  @Get()
  @ApiOkResponse({ type: [QueueDTO] })
  @ApiOperation({
    title: 'Get queues listing'
  })
  async getQueues (@Query() { id }: QueryStaticData) {
    return this.service.get(id)
  }
}
