import { Cart } from './cart.es6.js';
import { AppDispatcher } from "../dispatcher/AppDispatcher";
import { appConstants } from "../constants/appConstants";

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
    getItem: function (product) {
        return cart.getItem(product);
    },
    getTotal: function() {
        return cart.getTotal();
    },
    hasProduct: function(product) {
        return cart.hasProduct(product);
    }

});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    console.log('in resister store with action type');
    console.log(action);
    switch (action.actionType) {
        case (appConstants.ADD_ITEM):
            cart.addItem(action.data);
            console.log('adding item')
            cartStore.emit(CHANGE_EVENT);
            break;
        case appConstants.CLEAR_CART:
            cart.clearCart(action.data);
            cartStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_ITEM:
            cart.removeItem(action.data);
            console.log('removing Item')
            cartStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_PRODUCT:
            cart.removeProduct(action.data);
            cartStore.emit(CHANGE_EVENT);
            break;
        default:
            console.log('default')
            return true;
    }
});


