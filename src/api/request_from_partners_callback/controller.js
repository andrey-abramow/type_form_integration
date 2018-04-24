import callback_body                      from './callback_body'
import TypeFormPartnersRequestTransaction from '../../services/interactors/TypeFormPartnersRequestTransaction'

export const create = ({ body }, res, next) => {
  TypeFormPartnersRequestTransaction.call(body,
    (err, result) => {
      console.log(err, result)
    }
  );
  res.status(201).json(body)
};
