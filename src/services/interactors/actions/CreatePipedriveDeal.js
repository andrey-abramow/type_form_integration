import PipedriveDeal from '../../pipedrive/models/deal'

export default () => {
  return ['person', 'stage', 'jiraIssue', (result, callback) => {

    const personId = result.person.id || result.person.get('id')

    PipedriveDeal.create({
      title: result.requestFormData.dealName,
      person_id: personId,
      stage_id: result.stage.get('id')
    }, callback)
  }]
}
