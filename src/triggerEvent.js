import getConstructorByName from './getConstructorByName';

var triggerEvent = function (element, name, properties) {
  var EventConstructor = getConstructorByName(name);
  var event = new EventConstructor(name, properties);
  element.dispatchEvent(event);
};

export default triggerEvent;
