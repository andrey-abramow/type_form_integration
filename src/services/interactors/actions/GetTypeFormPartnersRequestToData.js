import RequestForm from '../../request_form'
import { appConfig } from '../../../config'
import Decorator from '../../request_form/decorator'

const FIELDS_MAP = {
  dealName: 'Project name',
  personEmail: 'Email of contact person',
  personName: 'Name of partnership company'
};

export default (requestBody) => {
  return (callback) => {
    var requestForm = new RequestForm(requestBody);

    const assigneeName = appConfig.defaultAssignee;
    const assigneeEmail = appConfig.users[assigneeName].email;

    var data = {
      dealName: requestForm.getFieldValueByName(FIELDS_MAP.dealName),
      personEmail: requestForm.getFieldValueByName(FIELDS_MAP.personEmail),
      personName: requestForm.getFieldValueByName(FIELDS_MAP.personName),
      assigneeEmail: assigneeEmail,
      pipelineName: appConfig.PIPEDRIVE_MAP['Partners'],
      issueName: `Request / ${requestForm.getFieldValueByName(FIELDS_MAP.dealName)}`,
      content: new Decorator(requestForm).decorate('partners'),
      requestForm: requestForm
    }
    callback(null, data)
 }
}
