class RequestFormNullField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    return `${this.field.title}: ${this.getValue() || 'Empty'}`
  }

  getValue() {
    return ''
  }
}
export default RequestFormNullField;
