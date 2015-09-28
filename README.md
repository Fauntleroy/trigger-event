## trigger-event
Shortcut method for triggering DOM events.

-----

### Installation

This utility is designed for use with Browserify (but should work with anything CommonJS compatible). You can easily install it with npm:

```
npm install @fauntleroy/trigger-event
```

-----

### Usage

By default, when you include `trigger-event` you'll get the `triggerEvent` method, which accepts three arguments:

#### `triggerEvent(element, event, [properties])`

Argument | Type | Description
----- | ----- | -----
**element** | *Element* | The element you want to trigger the event on.
**event** | *String* | The event that you want to trigger.
**properties** | *Object* | The properties you want the event to have. This will not work with some events, see [Compatibility](#Compatibility).

```js
var triggerEvent = require('@fauntleroy/trigger-event');

document.addEventListener(document, 'click', function (event) {
  alert('clientX is: ' + event.clientX);
});

triggerEvent(document, 'click', {
  clientX: 50
});
```

-----

### Compatibility

Some events, such as `TouchEvent`s, `DragEvent`s, and `KeyEvent`s aren't quite properly handled by many browsers (like Chrome). While it's possible to trigger these events, they often have trouble with the `properties` object. Until these browsers catch up, some events just can't be triggered with custom `properties`.
