
export const create = ({ body }, res, next) => {
  console.log(body);
  console.log(body.form_response.answers[0]);
  res.status(201).json(body)
}

