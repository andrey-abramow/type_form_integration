import pipedrive from '../client'

class Person {

  static getAll (callback) {
    pipedrive.Persons.getAll(callback)
  }

  static create (data, callback) {
    pipedrive.Persons.add(data, callback)
  }

  static findByEmail(email, onSuccess, onError) {
    pipedrive.Persons.find({ term: email, search_by_email: true }, (err, persons) =>{
      if (err) return onError(err)
      onSuccess(persons[0])
    })
  }

  static findByEmailOrCreate(data, onSuccess, onError){
     this.findByEmail(data.email,
      (person) => {
        if(person) {
          onSuccess(person)
        } else {
          this.create(data, (err, newPerson)=> {
            if(err) return onError(err)
            onSuccess(newPerson)
          })
        }
      },
      (err) => {
        onError(err);
      });
  }

}
export default Person;
