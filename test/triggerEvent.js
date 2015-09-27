import test from 'tape';
import { mock } from 'simple-mock';
import _ from 'lodash';

import triggerEvent from '../src/triggerEvent';
import { eventsToTypesMap } from '../src/getConstructorByName';

var typesToElementsMap = {
  mouse: document,
  keyboard: document,
  focus: document,
  animation: document,
  form: document.createElement('form'),
  drag: document
};
var typesToPropertiesMap = {
  mouse: {
    clientX: 50
  },
  keyboard: {
    key: 'Enter'
  },
  focus: {
    relatedTarget: document.createDocumentFragment()
  },
  animation: {
    animationName: 'testanimation'
  },
  form: {
    bubbles: true
  },
  drag: {
    clientX: 50
  }
};

_.forEach(eventsToTypesMap, function (eventType, eventName) {
  var eventElement = typesToElementsMap[eventType];
  var eventProperties = typesToPropertiesMap[eventType];

  test(`Triggers the ${eventName} event`, function (t) {
    var eventCallback = mock();
    eventElement.addEventListener(eventName, eventCallback);
    triggerEvent(eventElement, eventName, eventProperties);
    t.ok(eventCallback.called, `${eventName} callback fired`);
    _.forEach(eventProperties, (eventPropertyValue, eventPropertyName) => {
      var eventCallbackObject = eventCallback.lastCall.args[0];
      t.equal(eventCallbackObject[eventPropertyName], eventPropertyValue, `${eventName} callback called with provided ${eventPropertyName} property`);
    });
    t.end();
  });
});
