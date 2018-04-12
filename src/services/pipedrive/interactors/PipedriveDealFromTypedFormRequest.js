import PipedrivePerson from '../models/person'
import PipedriveStage from '../models/stage'
import PipedriveDeal from '../models/deal'
import PipedriveNote from '../models/note'

import auto from 'async/auto';

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
    var dealName = this.requestForm.getFieldValueByName(this.constructor.FIELDS_MAP.dealName);
    var personEmail = this.requestForm.getFieldValueByName(this.constructor.FIELDS_MAP.personEmail);
    var personName = this.requestForm.getFieldValueByName(this.constructor.FIELDS_MAP.personName);

    auto(
      {
        person: (callback) => {
          PipedrivePerson.findByEmailOrCreate({email: personEmail, name: personName}, callback)
        },
        stage: (callback) => {
          PipedriveStage.getFirstForPipelineName(this.getPipelineName(), callback);
        },
        deal: ['person', 'stage', (results, callback) => {
          PipedriveDeal.create({
            title: dealName,
            person_id: results.person.get('id'),
            stage_id: results.stage.get('id')
          }, callback)
        }],
        note: ['person', 'deal', (results, callback) => {
          PipedriveNote.create({
            content: this.requestForm.toS(),
            person_id: results.person.get('id'),
            deal_id: results.deal[0].id
          }, callback)
        }]
      },
      (err, result) => {
        console.log(err, result.note)
      });
  }

  getPipelineName(){
    return 'Partners'
  }


}
export default PipedriveDealFromTypedFormRequest;
