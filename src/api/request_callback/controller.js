// import Issue from '../../services/jira/issue';
import callback_body from './callback_body'
import RequestModel from './model'
// import PipedriveDeal from '../../services/pipedrive/deal'
// import PipedrivePipeline from '../../services/pipedrive/pipeline'
// import PipedriveStage from '../../services/pipedrive/stage'
// import PipedrivePeson from '../../services/pipedrive/person'
// import PipedriveDealField from '../../services/pipedrive/dealField'
import PipedriveDealFromTypedFormRequest from '../../services/pipedrive/interactors/PipedriveDealFromTypedFormRequest'


import RequestForm from '../../services/request_form'

export const create = ({ body }, res, next) => {

  let request = new RequestForm(callback_body);

  new PipedriveDealFromTypedFormRequest({requestForm: request, jiraIssue: {}}).create()

  // PipedrivePoster.createDeal({requestForm: request, jiraIssue: {}})


  // create jira
  // get link from jira
  // find_or_create_person(by_email) to get person_id
  // find state_id (through pipeline name first stage)
  // get request.getFieldValue('Project name') - deal name
  // create deal with stage_id, person_id
  // create note (deal_id, person_id)


  // PipedriveDeal.find(1, (err, deal) =>{
  //   console.log(err)
  //   console.log(deal)
  // })
  //  PipedriveDealField.getAll((err, fields)=>{
  //    console.log(fields);
  //  })
  // PipedrivePeson.getAll((err, persons)=> {
  //   console.log(persons[0].get('email'))
  // })
  // PipedriveStage.firstForPipline(2,
  //   (stage) => {
  //     console.log(stage);
  //   },
  //  (err)=> {
  //
  // });
  // PipedrivePipeline.getByName('name', (err, pipelines)=> {
  //   console.log(err);
  //   console.log(pipelines);
  // })
  // })
  // PipedriveDeal.create({})

  // RequestModel.create({ body: body }, (err, _) => {
  //   if (err) return;
  //   Issue.create({ name: request.getName(),
  //                  attachments: request.getAttachments(),
  //                  description: request.format().join("\r\n") });
  // });


  res.status(201).json(body)
};

