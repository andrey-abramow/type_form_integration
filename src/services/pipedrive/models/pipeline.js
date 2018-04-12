import pipedrive from '../client'

class Pipeline {

  static findByName (name, callback) {
    pipedrive.Pipelines.getAll((err, pipelines) =>{
      callback(err, pipelines.filter((p) => { return p.get('name') == name }))
    });
  }

}
export default Pipeline;
