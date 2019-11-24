import { IBaseInterface } from 'twisted-common/src/config/base'

export interface IMapsModel extends IBaseInterface {
  mapId: string
  mapName: string
  notes: string
}
