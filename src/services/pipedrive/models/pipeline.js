import pipedrive from './client'

class Pipeline {

  static getAll (name, callback) {
    pipedrive.Pipelines.getAll(callback);
  }

  static create (data, callback) {
    pipedrive.Deals.add(data, callback);
  };


}
export default Pipeline;
