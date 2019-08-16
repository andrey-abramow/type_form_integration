import PipedriveDeal from '../../pipedrive/models/deal'
import {appConfig} from '../../../config'

export default () => {
  return ['pipedriveAssigneeUser', 'person', 'stage', 'jiraIssue', (result, callback) => {

    const personId = result.person.id || result.person.get('id');

    let userId;

    if(result.pipedriveAssigneeUser)
      userId = result.pipedriveAssigneeUser.id || result.pipedriveAssigneeUser.get('id');

    PipedriveDeal.create({
      title: result.requestFormData.dealName,
      person_id: personId,
      user_id: userId,
      stage_id: appConfig.pipedrive.stageId
    }, callback)
  }]
}
