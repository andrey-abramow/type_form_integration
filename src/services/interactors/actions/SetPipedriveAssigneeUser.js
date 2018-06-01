import PipedriveUser from '../../pipedrive/models/user'

export default () => {
  return ['requestFormData', (result, callback) => {
    PipedriveUser.findByEmail(result.requestFormData.assigneeEmail, callback)
  }]
}
