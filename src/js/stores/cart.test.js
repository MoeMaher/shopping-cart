import { assert } from 'chai';

import {Cart, Product} from "./cart.es6.js";


describe('Cart', function () {
    let cart = new Cart();
    let pepsiProduct = new Product(0, 'pepsi', 5);
    it('should be able to add a product', function() {
        cart.addItem(pepsiProduct);
    });
    it('The product should be in the cart', function () {
        let items = cart.getItems();
        assert.lengthOf(items, 1);
        assert.typeOf(items[0], 'Object');
        assert.equal(items[0].getProduct().getId(), pepsiProduct.getId());
    });
    it('should be able to add the same product', function() {
        let newProduct = new Product(0, 'pepsi', 5);
        cart.addItem(newProduct);
    });
    it('The count should be 2 and the price is 2 times the product', function() {
        let items   = cart.getItems();
        let product = items[0].getProduct();
        assert.lengthOf(items, 1);
        assert.equal(items[0].getCount(), 2);
        assert.equal(items[0].getPrice(), 2 * product.getPrice());
    });
    it('After removing the product, ItemCount should be 1 and price be 1 times the price of the product', function() {
        let newProduct = new Product(0, 'pepsi', 5);
        cart.removeItem(newProduct);
        let items   = cart.getItems();
        let product = items[0].getProduct();
        assert.lengthOf(items, 1);
        assert.equal(items[0].getCount(), 1);
        assert.equal(items[0].getPrice(), 1 * product.getPrice());
    });
    it('Adding another product with new id, length should be 2', function() {
        let newProduct = new Product(1, 'fairouz', 6);
        cart.addItem(newProduct);
        let items = cart.getItems();
        assert.lengthOf(items, 2);
        assert.equal(items[0].getCount(), 1);
        assert.equal(items[1].getCount(), 1);
    });
    it('Should be able to Get total', function() {
        assert.equal(cart.getTotal(), 11);
    });
    it('Should be able to be cleared', function() {
        cart.clearCart();
        let items   = cart.getItems();
        assert.lengthOf(items,0);
    });

});
