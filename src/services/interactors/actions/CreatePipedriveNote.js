import PipedriveNote from '../../pipedrive/models/note'

export default () => {
  return ['person', 'deal', 'jiraIssue', (result, callback) => {
    let contentSeparator = '\n\r<br>'
    let jiraLink = `${contentSeparator} Jira link: https://rademade.atlassian.net/browse/${result.jiraIssue.key}`
    PipedriveNote.create({
      content: result.requestFormData.requestForm.format().join(contentSeparator) + jiraLink,
      person_id: result.person.get('id'),
      deal_id: result.deal[0].id
    }, callback)
  }]
}
