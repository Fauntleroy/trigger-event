var eventsToTypesMap = {
  click: 'mouse',
  contextmenu: 'mouse',
  dblclick: 'mouse',
  mousedown: 'mouse',
  mouseenter: 'mouse',
  mouseleave: 'mouse',
  mousemove: 'mouse',
  mouseout: 'mouse',
  mouseover: 'mouse',
  show: 'mouse',
  keydown: 'keyboard',
  keypress: 'keyboard',
  keyup: 'keyboard',
  blur: 'focus',
  focus: 'focus'
};

var typesToConstructorsMap = {
  mouse: MouseEvent,
  keyboard: KeyboardEvent,
  focus: FocusEvent
};

var getConstructorByName = function (name) {
  var type = eventsToTypesMap[name];
  var Constructor = typesToConstructorsMap[type] || Event;
  return Constructor;
};

export { eventsToTypesMap, typesToConstructorsMap };
export default getConstructorByName;
