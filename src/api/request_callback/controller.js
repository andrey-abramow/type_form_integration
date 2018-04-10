import Issue from '../../services/jira/issue';
// import callback_body from './callback_body'
import RequestForm from '../../services/request_form'

export const create = ({ body }, res, next) => {

  let request = new RequestForm(body);

  Issue.create({ name: request.getName(),
                 attachments: request.getAttachments(),
                 description: request.format().join("\r\n") });

  res.status(201).json(body)
};

