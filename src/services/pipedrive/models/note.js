import pipedrive from '../client'

class Note {
  // content, deal_id, person_id
  static create (data, callback) {
    pipedrive.Notes.add(data, callback)
  }

}
export default Note;
