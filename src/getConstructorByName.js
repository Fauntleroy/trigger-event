var getConstructorByName = function (name) {
  switch (name) {
    case 'click':
    case 'contextmenu':
    case 'dblclick':
    case 'mousedown':
    case 'mouseenter':
    case 'mouseleave':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'show':
      return MouseEvent;
    break;
    default:
      return Event;
    break;
  }
};

export default getConstructorByName;
