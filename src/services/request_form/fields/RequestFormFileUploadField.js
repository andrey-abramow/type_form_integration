import path from 'path'
import RequestFormNullField from './RequestFormNullField'

class RequestFormFileUploadField extends RequestFormNullField {

  getValue() {
    return path.basename(this.answer.file_url)
  }
}
export default RequestFormFileUploadField;
