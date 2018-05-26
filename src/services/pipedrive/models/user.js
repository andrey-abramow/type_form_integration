import pipedrive from '../client'

class User {

  static findByEmail(email, callback) {
    pipedrive.Users.find({ term: email, search_by_email: true }, (err, users) =>{
      if (err) return callback(err)
      callback(undefined, users[0]);
    })
  }

}
export default User;
