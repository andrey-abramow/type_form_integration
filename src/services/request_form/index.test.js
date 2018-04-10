import RequestTest from './index'
import callbackBody from './callback_body'

test('to_s', () => {
  let request = new RequestTest(callbackBody);
  console.log(request.to_s());
  // expect(request.to_s()).toBe();
});
