import PipedrivePerson from '../../pipedrive/models/person'

export default () => {
  return ['requestFormData', (result, callback) => {
    PipedrivePerson.findByEmailOrCreate({
      email: result.requestFormData.personEmail,
      name: result.requestFormData.personName}, callback)
  }]
}
