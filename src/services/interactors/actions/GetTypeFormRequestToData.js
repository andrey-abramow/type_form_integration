import RequestForm from '../../request_form'

const FIELDS_MAP = {
  dealName: 'Project name',
  personEmail: 'Email',
  personName: 'Your Name and Surname',
  pipelineName: 'How did you find out about the Rademade'
};

export default (requestBody) => {
  return (callback) => {
    var requestForm = new RequestForm(requestBody);
    var data = { 
      dealName: requestForm.getFieldValueByName(FIELDS_MAP.dealName),
      personEmail: requestForm.getFieldValueByName(FIELDS_MAP.personEmail),
      personName: requestForm.getFieldValueByName(FIELDS_MAP.personName),
      pipelineName: requestForm.getFieldValueByName(FIELDS_MAP.pipelineName),
      content: requestForm.toS(),
      requestForm: requestForm
    }
    callback(null, data)
 }
}
