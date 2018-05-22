import { Cart } from './cart.es6.js';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;


var CHANGE_EVENT = 'CHANGE';

var cart = new Cart();


export const cartStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getItems: function () {
        return cart.getItems();
    },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      cart.addItem(action.data);
      cartStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});


