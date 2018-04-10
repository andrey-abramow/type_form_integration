import RequestForm from './index'
import callbackBody from './callback_body'

test('to_s', () => {
  let request = new RequestForm(callbackBody);
  console.log(request.format());
  // expect(request.to_s()).toBe(['Name of partnership company: Lorem ipsum dolor']);
});
