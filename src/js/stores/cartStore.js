/**
 * (FLUX Architecture)
 *
 * this class is responsible for managing the information of the cart, storing and manipulating
 * any change to the cart have to be done here and triggered by App Dispatcher. FLUX Architecture.
 */


import { Cart } from './cart.es6.js';
import { AppDispatcher } from "../dispatcher/AppDispatcher";
import { appConstants } from "../constants/appConstants";
import localforage from 'localforage';
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;


// initializing the cart and Loading if any
let cart = new Cart();
cart.loadFromJSON(JSON.parse(localStorage.getItem('cart'))).then(()=>{
    cartStore.emit(appConstants.CART_EVENT);    // emitting a cart event for cart related components to get update.
});

// save the cart information to the localstorage.
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.toJSON()));
}

// intializing the store and adding changes listener and read only methods to the cart.
export const cartStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on(appConstants.CART_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(appConstants.CART_EVENT, cb);
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

// registering to the dispatcher to get notified if any (write) request occurred.
AppDispatcher.register(async function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case (appConstants.ADD_ITEM):
            await cart.addItem(action.data);            // performing the task
            saveCart();                                 // saving the cart to the localstorage
            cartStore.emit(appConstants.CART_EVENT);    // emitting a cart event for cart related components to get update.
            break;
        case appConstants.CLEAR_CART:
            await cart.clearCart(action.data);
            saveCart();
            cartStore.emit(appConstants.CART_EVENT);
            break;
        case appConstants.REMOVE_ITEM:
            await cart.removeItem(action.data);
            saveCart();
            cartStore.emit(appConstants.CART_EVENT);
            break;
        case appConstants.REMOVE_PRODUCT:
            await cart.removeProduct(action.data);
            saveCart();
            cartStore.emit(appConstants.CART_EVENT);
            break;
        default:
            console.log('default')
            return true;
    }
});
