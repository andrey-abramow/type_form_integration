import pipedrive from './client'

class Stage {

  static firstForPipline (pipelineId, onSuccess, onError) {
    pipedrive.Stages.getAll({pipeline_id: pipelineId}, (err, stages) =>{
      if (err) return onError(err)
      onSuccess(stages[0]);
    });
  }


}
export default Stage;
