import pipedrive from '../client'
import Pipeline from './pipeline'

class Stage {

  static getFirstForPipelineName (pipelineName, callback) {
    Pipeline.findByName(pipelineName, (err, pipelines) => {

      if(err) return callback(err);

      var pipeline = pipelines[0];

      if(!pipeline) return callback({message: `Pipeline with name ${pipelineName} not found`})

      pipedrive.Stages.getAll({pipeline_id: pipeline.get('id')}, (err, stages) => {
        if (err) return callback(err);
        callback(null, stages[0]);
      });

    })
  }


}
export default Stage;
