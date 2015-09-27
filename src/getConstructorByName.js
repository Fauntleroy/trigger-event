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
  show: 'mouse'
};

var typesToConstructorsMap = {
  mouse: MouseEvent
};

var getConstructorByName = function (name) {
  var type = eventsToTypesMap[name];
  var Constructor = typesToConstructorsMap[type] || Event;
  return Constructor;
};

export { eventsToTypesMap, typesToConstructorsMap };
export default getConstructorByName;
