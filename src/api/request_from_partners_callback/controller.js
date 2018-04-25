import callback_body                      from './callback_body'
import TypeFormPartnersRequestTransaction from '../../services/interactors/TypeFormPartnersRequestTransaction'

export const create = ({ body }, res, next) => {
  let requestBody = body;

  if (process.env.NODE_ENV !== 'production'){
    requestBody = callback_body;
  }

  TypeFormPartnersRequestTransaction.call(requestBody,
    (err, result) => {
    }
  );
  res.status(201).json(body)
};
