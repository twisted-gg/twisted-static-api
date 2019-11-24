import { ApiResponseModelProperty } from '@nestjs/swagger'
import { BaseDTO } from 'twisted-common/src/config'

export class QueueDTO extends BaseDTO {
  @ApiResponseModelProperty()
  queueId!: number

  @ApiResponseModelProperty()
  map!: string

  @ApiResponseModelProperty()
  description?: string

  @ApiResponseModelProperty()
  notes?: string
}
