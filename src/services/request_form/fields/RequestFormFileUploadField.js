class RequestFormTextField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    return `${this.field.title}: ${this.answer.file_url}`
  }
}
export default RequestFormTextField;
