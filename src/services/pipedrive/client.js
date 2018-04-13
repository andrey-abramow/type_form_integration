import Pipedrive from 'pipedrive'
var pipedrive = new Pipedrive.Client(process.env.PIPEDRIVE_API_TOKEN, { strictMode: true });
export default pipedrive;
