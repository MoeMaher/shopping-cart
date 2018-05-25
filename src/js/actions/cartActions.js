/**
 * (FLUX Architecture)
 *
 * cardAction is responsible for routing the requests to the dispatcher with the intended actionType
 * to be forwarded to the store and get excuted .
 */

import { appConstants } from "../constants/appConstants";
import { AppDispatcher } from "../dispatcher/AppDispatcher";

export const cartActions = {    //functions are self explanatory.
    addItem: function (item) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: item
        });
    },
    removeItem: function (index) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        })
    },
    removeProduct: function (index) {
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_PRODUCT,
            data: index
        })
    },
    clearCart: function (index) {
        AppDispatcher.handleAction({
            actionType: appConstants.CLEAR_CART,
            data: index
        })
    },
};





