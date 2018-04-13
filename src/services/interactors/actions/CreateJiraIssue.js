import Issue from '../../jira/issue'

export default () => {
  return ['requestFormData', (result, callback) => {
    Issue.create({ name: result.requestFormData.requestForm.getName(),
                   attachments: result.requestFormData.requestForm.getAttachments(),
                   description: result.requestFormData.content }, callback)

  }]
}
