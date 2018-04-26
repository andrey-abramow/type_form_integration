class RequestFormNullField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    return `${this.field.title}: ${this.getValue()}`
  }

  getValue() {
    return `Empty`
  }
}
export default RequestFormNullField;
