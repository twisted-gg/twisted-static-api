import { ApiResponseModelProperty } from '@nestjs/swagger'
import { BaseDTO } from 'twisted-common/src/config'

export class SeasonDTO extends BaseDTO {
  @ApiResponseModelProperty()
  id!: number

  @ApiResponseModelProperty()
  season!: string
}
