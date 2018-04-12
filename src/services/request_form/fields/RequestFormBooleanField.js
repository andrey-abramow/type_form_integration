import RequestFormNullField from './RequestFormNullField'

class RequestFormTextField extends RequestFormNullField {

  getValue() {
    return `${this.answer.boolean}`
  }

}
export default RequestFormTextField;
