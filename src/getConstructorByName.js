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
  focus: 'focus',
  animationend: 'animation',
  animationiteration: 'animation',
  animationstart: 'animation',
  change: 'form',
  reset: 'form',
  submit: 'form',
  drag: 'drag',
  dragend: 'drag',
  dragenter: 'drag',
  dragleave: 'drag',
  dragover: 'drag',
  dragstart: 'drag',
  drop: 'drag'
};

// access constructors via window just in case they don't exist
var typesToConstructorsMap = {
  mouse: window['MouseEvent'],
  keyboard: window['KeyboardEvent'],
  focus: window['FocusEvent'],
  animation: window['AnimationEvent'],
  form: window['Event'],
  drag: window['DragEvent']
};

var getConstructorByName = function (name) {
  var type = eventsToTypesMap[name];
  var Constructor = typesToConstructorsMap[type] || Event;
  return Constructor;
};

export { eventsToTypesMap, typesToConstructorsMap };
export default getConstructorByName;
