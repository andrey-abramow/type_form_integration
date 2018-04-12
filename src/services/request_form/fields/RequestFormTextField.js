import RequestFormNullField from './RequestFormNullField'

class RequestFormTextField extends RequestFormNullField {

  getValue() {
    return `${this.answer.text}`
  }
}
export default RequestFormTextField;
