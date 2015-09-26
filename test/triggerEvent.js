import test from 'tape';
import { mock } from 'simple-mock';

import triggerEvent from '../src/triggerEvent';

test('Triggers a click event', function (t) {
  t.plan(2);
  var clickMock = mock();
  document.addEventListener('click', clickMock);
  triggerEvent(document, 'click', {
    clientX: 50
  });
  t.ok(clickMock.called, 'Event callback fired');
  t.equal(clickMock.lastCall.args[0].clientX, 50, 'Event callback called with provided propeties');
});
