import PipedriveNote from '../../pipedrive/models/note'

export default () => {
  return ['person', 'deal', 'jiraIssue', (result, callback) => {
    let contentSeparator = '\n\r<br>'
    let jiraLink = `${contentSeparator} Jira link: https://rademade.atlassian.net/browse/${result.jiraIssue.key}`
    const personId = result.person.id || result.person.get('id')
    PipedriveNote.create({
      content: jiraLink,
      person_id: personId,
      deal_id: result.deal[0].id
    }, callback)
  }]
}
