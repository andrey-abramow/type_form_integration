import callback_body              from './callback_body'
import TypeFormRequestTransaction from '../../services/interactors/TypeFormRequestTransaction'
export const create = ({ body }, res, next) => {

  let requestBody = body;

  if (process.env.NODE_ENV !== 'production'){
    requestBody = callback_body;
  }

  TypeFormRequestTransaction.call(requestBody,
    (err, result) => {
      console.log(err, result)
    }
  );
  res.status(201).json(body)
};

