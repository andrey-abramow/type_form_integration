import RequestFormTextField from './fields/RequestFormTextField'
import RequestFormNullField from './fields/RequestFormNullField'
import RequestFormBooleanField from './fields/RequestFormBooleanField'
import RequestFormMultipleChoiceField from './fields/RequestFormMultipleChoiceField'
import RequestFormFileUploadField from './fields/RequestFormFileUploadField'


class RequestForm {

  static FIELDS_FORMATTERS_MAP = {
     short_text: RequestFormTextField,
     long_text: RequestFormTextField,
     yes_no: RequestFormBooleanField,
     multiple_choice: RequestFormMultipleChoiceField,
     file_upload: RequestFormFileUploadField
  };

  constructor (data) {
    this.data = data;
  }

  getFieldValueByName(fieldName) {
    var field = this.findFieldByTitle(fieldName);
    var fieldFormatter = this.getFieldFormatter(field);
    return fieldFormatter.getValue();
  }

  getName () {
    return this.data.form_response.definition.title;
  }

  getAttachments () {
    return this.getAnswers()
              .filter((answer) => { return answer.field.type == 'file_upload' })
              .map((answer) => { return answer.file_url });
  }

  private

  findFieldByTitle(title) {
    return this.getFields().find((field)=> { return field.title == title })
  }

  getFieldAnswer(field){
    return this.getAnswers().find((answer) => {return answer.field.id == field.id })
  }

  getFieldFormatter (field) {
    if (!field) return new RequestFormNullField()

    let answer = this.getFieldAnswer(field)

    let fieldFormatterClass = this.constructor.FIELDS_FORMATTERS_MAP[field.type] || RequestFormNullField;

    return new fieldFormatterClass(field, answer);
  }

  getFields () {
    if (this.fields) return this.fields;
    this.fields = this.data.form_response.definition.fields;
    return this.fields
  }

  getAnswers () {
    if (this.answers) return this.answers;
    this.answers = this.data.form_response.answers;
    return this.answers;
  }

}
export default RequestForm;
