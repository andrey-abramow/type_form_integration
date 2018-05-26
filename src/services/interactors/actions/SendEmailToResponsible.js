import Mailer      from '../../mailer'

export default () => {
  return ['deal', 'requestFormData', (result, callback) => {
    let deal = result.deal[0];
    Mailer.send({
      from: deal.cc_email,
      to: result.requestFormData.assigneeEmail,
      subject: 'NEW TYPED_FORM REQUEST',
      deal: deal}, callback)
  }]
}
