import pipedrive from '../client'

class Pipeline {

  static findByNameOrDefault (name, callback) {
    pipedrive.Pipelines.getAll((err, pipelines) =>{
      // find by name or return first
      var p = pipelines.find((p) => { return p.get('name') == name }) || pipelines[0]
      callback(err, p)
    });
  }

}
export default Pipeline;
