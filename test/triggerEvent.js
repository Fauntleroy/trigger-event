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
  transition: document,
  form: document.createElement('form'),
  drag: document,
  clipboard: document,
  touch: document
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
  transition: {
    elapsedTime: 50
  },
  form: {
    bubbles: true
  },
  drag: {
    clientX: 50
  },
  // This event doesn't work properly in any browser yet, so data passing isn't going to work
  clipboard: {},
  touch: {
    touches: [{
      clientX: 50
    }]
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
