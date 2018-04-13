import pipedrive from '../client'
import Pipeline  from './pipeline'

class Stage {

  static getFirstForPipelineName (pipelineName, callback) {
    Pipeline.findByNameOrDefault(pipelineName, (err, pipeline) => {

      if(err) return callback(err);

      if(!pipeline) return callback({message: `Pipeline with name ${pipelineName} not found`})

      pipedrive.Stages.getAll({pipeline_id: pipeline.get('id')}, (err, stages) => {
        if (err) return callback(err);
        callback(null, stages[0]);
      });

    })
  }


}
export default Stage;
