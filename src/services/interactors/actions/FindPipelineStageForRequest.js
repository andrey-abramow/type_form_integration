import PipedriveStage from '../../pipedrive/models/stage'

export default () => {
  return ['requestFormData', (result, callback) => {
    PipedriveStage.getFirstForPipelineName(result.requestFormData.pipelineName, callback);
  }]
}
