import mongoose, { Schema } from 'mongoose'

const formRequestSchema = new Schema({
  body: {
    type: Schema.Types.Mixed
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

formRequestSchema.methods = {
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

const model = mongoose.model('FormRequest', formRequestSchema)

export const schema = model.schema
export default model
