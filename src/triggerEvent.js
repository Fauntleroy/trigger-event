import getConstructorByName from './getConstructorByName';

var triggerEvent = function (element, name, properties) {
  var EventConstructor = getConstructorByName(name);
  var event;
  try {
    event = new EventConstructor(name, properties);
  } catch (error) {
    event = new Event(name, properties);
  }
  element.dispatchEvent(event);
};

export default triggerEvent;
