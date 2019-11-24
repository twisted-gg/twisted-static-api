import * as mongoose from 'mongoose'
import { ModelsName } from '../../../enums/database.enum'
import { IModels } from '../../../database/database.types'
import { ModelsOptions } from 'twisted-common/src/config'
// Schema definition
const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },

  season: {
    type: String,
    required: true
  }
}, ModelsOptions)

// Model definition
export const SeasonsModel: IModels = {
  name: ModelsName.STATIC_SEASONS,
  collection: ModelsName.STATIC_SEASONS,
  schema: schema
}
