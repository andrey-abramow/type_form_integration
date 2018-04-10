class RequestFormNullField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    return `Define field: ${this.field.type}`
  }
}
export default RequestFormNullField;
