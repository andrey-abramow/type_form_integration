import auto                             from 'async/auto';
import GetTypeFormPartnersRequestToData from './actions/GetTypeFormPartnersRequestToData'
import FindOrCreatePipedrivePerson      from './actions/FindOrCreatePipedrivePerson'
import FindPipelineStageForRequest      from './actions/FindPipelineStageForRequest'
import CreatePipedriveDeal              from './actions/CreatePipedriveDeal'
import CreatePipedriveNote              from './actions/CreatePipedriveNote'
import SaveTypeFormPartnersRequest      from './actions/SaveTypeFormPartnersRequest'
import CreateJiraIssue                  from './actions/CreateJiraIssue'

class TypeFormPartnersRequestTransaction {
  static call(requestBody, callback) {
    auto(
      {
        logRequest: SaveTypeFormPartnersRequest(requestBody),
        requestFormData: GetTypeFormPartnersRequestToData(requestBody),
        jiraIssue: CreateJiraIssue(),
        person: FindOrCreatePipedrivePerson(),
        stage: FindPipelineStageForRequest(),
        deal: CreatePipedriveDeal(),
        note: CreatePipedriveNote()
      }, callback
    );
  }
}
export default TypeFormPartnersRequestTransaction;

