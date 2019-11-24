import { ApiResponseModelProperty } from '@nestjs/swagger'
import { BaseDTO } from 'twisted-common/src/config'

export class MapsDTO extends BaseDTO {
  @ApiResponseModelProperty()
  mapId!: string

  @ApiResponseModelProperty()
  mapName!: string

  @ApiResponseModelProperty()
  notes?: string | null
}
