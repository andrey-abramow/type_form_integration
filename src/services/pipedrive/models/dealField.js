import pipedrive from './client'

class DealField {

  static getAll (callback) {
    pipedrive.DealFields.getAll(callback);
  }


}
export default DealField;
