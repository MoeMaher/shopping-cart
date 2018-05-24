import {cartStore} from "../stores/cartStore";

import { appConstants } from "../constants/appConstants";
import { AppDispatcher } from "../dispatcher/AppDispatcher";

export const cartActions = {
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
        console.log('removing in Actions');
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





