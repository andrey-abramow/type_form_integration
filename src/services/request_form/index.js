class RequestForm {

  constructor (data) {
    this.data = data;
  }

  to_s () {
    return this.getFields().map((field) => {
      this.format_field(field)
    });
  }

  private

  format_field (field) {
    field.field.id
  }

  getFields () {
    if (this.fields) return this.fields;
    this.fields = this.data.form_response.definition.fields;
  }

  getAnswers () {
    if (this.answers) return this.answers;
    this.answers = this.data.form_response.answers;
  }

}
export default RequestForm;
