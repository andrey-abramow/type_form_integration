import RequestForm from '../../request_form'
import { appConfig } from '../../../config'
import Decorator from '../../request_form/decorator'

const FIELDS_MAP = {
  dealName: 'Project name',
  personEmail: 'Email',
  personName: 'Your Name and Surname',
  pipelineName: 'How did you find out about the Rademade',
  assignee: "Contact person from Rademade"
};

export default (requestBody) => {
  return (callback) => {
    var requestForm = new RequestForm(requestBody);
    var data = {
      dealName: requestForm.getFieldValueByName(FIELDS_MAP.dealName),
      personEmail: requestForm.getFieldValueByName(FIELDS_MAP.personEmail),
      personName: requestForm.getFieldValueByName(FIELDS_MAP.personName),
      pipelineName: appConfig.PIPEDRIVE_MAP[requestForm.getFieldValueByName(FIELDS_MAP.pipelineName)],
      assignee: appConfig.defaultAssignee,
      issueName: `Request / ${requestForm.getFieldValueByName(FIELDS_MAP.dealName)}`,
      content: new Decorator(requestForm).decorate('common'),
      requestForm: requestForm
    };
    callback(null, data)
 }
}
