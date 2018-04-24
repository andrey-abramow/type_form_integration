import Mailer      from '../../mailer'
import {appConfig} from '../../../config'

export default () => {
  return ['deal', 'requestFormData', (result, callback) => {
    let deal = result.deal[0];
    Mailer.send({
      from: deal.cc_email,
      to: appConfig.users[result.requestFormData.assignee].email,
      subject: 'NEW TYPED_FORM REQUEST',
      deal: deal}, callback)
  }]
}
