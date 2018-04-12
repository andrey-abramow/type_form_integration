import pipedrive from '../client'

class Deal {

  static find (dealId, callback) {
    pipedrive.Deals.get(dealId, callback);
  }

  static create (data, callback) {
    pipedrive.Deals.add(data, callback);
  };


}
export default Deal;
