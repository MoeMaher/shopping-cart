/**
 * (FLUX Architecture)
 *
 * Dispatcher attributes for managing requests from the components (Action class) to the cart Store.
 * @type {{DispatchToken?: DispatchToken}|Dispatcher}
 */

var Dispatcher = require('flux').Dispatcher;

export var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'CART_ACTION',
    action: action
  });
};


