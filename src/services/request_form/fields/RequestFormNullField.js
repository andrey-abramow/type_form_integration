class RequestFormNullField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    return `${this.field.title}: ${this.getValue()}`
  }

  getValue() {
    return `Define field: ${this.field.type}`
  }
}
export default RequestFormNullField;
