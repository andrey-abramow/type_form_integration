import mongoose, { Schema } from 'mongoose'

const formRequestFromPartnersSchema = new Schema({
  body: {
    type: Schema.Types.Mixed
  },
  status: {
    type: String
  },
  created_at: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

formRequestFromPartnersSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('FormRequestFromPartners', formRequestFromPartnersSchema)

export const schema = model.schema
export default model
