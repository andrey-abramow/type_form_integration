import RequestFromModel from '../../../api/request_callback/model'

export default (requestBody) => {
  return (callback) => {
    RequestFromModel.create({ body: requestBody, status: 'new' }, callback)
  }
}
