import RequestForm from '../../request_form'
import { appConfig } from '../../../config'

const FIELDS_MAP = {
  dealName: 'Project name',
  personEmail: 'Email of contact person',
  personName: 'Name of partnership company'
};

export default (requestBody) => {
  return (callback) => {
    var requestForm = new RequestForm(requestBody);
    var data = {
      dealName: requestForm.getFieldValueByName(FIELDS_MAP.dealName),
      personEmail: requestForm.getFieldValueByName(FIELDS_MAP.personEmail),
      personName: requestForm.getFieldValueByName(FIELDS_MAP.personName),
      assignee: appConfig.defaultAssignee,
      pipelineName: appConfig.PIPEDRIVE_MAP['Partners'],
      content: requestForm.toS(),
      requestForm: requestForm
    }
    callback(null, data)
 }
}
