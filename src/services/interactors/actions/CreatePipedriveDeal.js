import PipedriveDeal from '../../pipedrive/models/deal'

export default () => {
  return ['person', 'stage', 'jiraIssue', (result, callback) => {
    PipedriveDeal.create({
      title: result.requestFormData.dealName,
      person_id: result.person.get('id'),
      stage_id: result.stage.get('id')
    }, callback)
  }]
}
