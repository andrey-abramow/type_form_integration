import PipedrivePerson from '../models/person'

class PipedriveDealFromTypedFormRequest {

  static FIELDS_MAP = {
    dealName: 'Project name',
    personEmail: 'Email',
    personName: 'Your Name and Surname'
  };


  constructor({requestForm, jiraIssue}) {
    this.requestForm = requestForm;
    this.jiraIssue = jiraIssue;
  }

  create() {
    console.log('DEAL', this.requestForm.getFieldValueByName(this.constructor.FIELDS_MAP.dealName));
    // console.log('PERSON',
    var personEmail = this.requestForm.getFieldValueByName(this.constructor.FIELDS_MAP.personEmail);
    var personName = this.requestForm.getFieldValueByName(this.constructor.FIELDS_MAP.personName);


    PipedrivePerson.findByEmailOrCreate({ email: personEmail, name: personName },
      (person) => {
        console.log(person)
      },
      (err) => {

      },
    );

    // find_or_create_person(by_email) to get person_id
    // find state_id (through pipeline name first stage)
    // get request.getFieldValue('Project name') - deal name
    // create deal with stage_id, person_id
    // create note (deal_id, person_id)
  }


}
export default PipedriveDealFromTypedFormRequest;
