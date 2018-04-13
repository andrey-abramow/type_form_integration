import RequestFromPartnerModel from '../../../api/request_from_partners_callback/model'

export default (requestBody) => {
  return (callback) => {
    RequestFromPartnerModel.create({ body: requestBody }, callback)
  }
}
