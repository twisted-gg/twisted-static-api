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

  name: {
    type: String,
    required: true
  }
}, ModelsOptions)

// Model definition
export const StaticTftItemsModel: IModels = {
  name: ModelsName.STATIC_TFT_ITEM,
  collection: ModelsName.STATIC_TFT_ITEM,
  schema: schema
}
