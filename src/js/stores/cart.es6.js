export const Cart = (function() {
    /*
    *   Intialize private instance variable as a WeakMap to
    *   store private data for an object or to hide implementation details
    */
    const _items = new WeakMap();

    class Cart {
        /*
       * Cart class
       * keeps track of products through items
       */

        constructor() {

            // Intializing the instance variable using the current class as the key
            _items.set(this, []);
            this.$maher = 'maher';
        }

        // get the list of items
        getItems() {
            return _items.get(this);
        }


        operationOnItemByProduct(params) {
            /*
            *   A helper method that takes input object { product, operation }
            *   it search for the item that carry the product and perform the operation
            *   on it if the operation was provided.
            *
            *   and return boolean: true if found.
             */
            let items = _items.get(this);
            let answer = false;
            items.forEach(item => {
                if (item.getProduct().getId() === params.product.getId()) {
                    // found the item.
                    answer = true;
                    if (params.operation) {
                        // executing the operation
                        params.operation(item)
                    }
                }
            });
            // update the _items incase the operation changed it.
            _items.set(this, items);
            return answer;
        }

        // Checks if cart contains an item with this product by id return Boolean
        hasProduct(product) {
            return this.operationOnItemByProduct({product});
        }

        // Adds a product or increment the item count
        addItem(product) {
            let exists = this.operationOnItemByProduct({product, operation: item => item.incrementCount()});
            if (!exists) {
                let items = _items.get(this);
                items.push(new Item(product));
                _items.set(this, items);
            }
        }

        // Decrement the count of the item containing the product or removes it.
        removeItem(product) {
            this.operationOnItemByProduct({
                product,
                operation: item => {
                    if (item.getCount() === 1) {
                        this.removeProduct(product);
                    } else {
                        item.decrementCount();
                    }
                }
            });

        }

        // removes the item that contains the product
        removeProduct(product) {
            this.operationOnItemByProduct({
                product,
                operation: item => {
                    let items = _items.get(this);
                    let index = items.indexOf(item);
                    _items.set(this, items.splice(index, 1));
                }
            })
        }

        // get an item containing the product or null otherwise
        getItem(product) {
            let itemOut = null
            this.operationOnItemByProduct({
                product, operation: (item) => {
                    itemOut = item
                }
            });
            return itemOut;
        }

        // returns the total of all items in the cart.
        getTotal() {
            let items = _items.get(this);
            let total = 0;
            for (let i = 0; i < items.length; i++) {
                total = total + (items[i].getCount() * items[i].getPrice());
            }
            return total;
        }

        // removes all items
        clearCart() {
            _items.set(this, []);
        }

    }

    return Cart;
}());


export const Item = (function() {
    /*
   *   Intialize private instance variable as a WeakMap to
   *   store private data for an object or to hide implementation details
   */
    const _product = new WeakMap();
    const _count = new WeakMap();
    const _price = new WeakMap();

    class Item {
        /*
        *  Item class
        *  carry information about group of products having the same id in the cart.
        */
        constructor(product) {
            _product.set(this, product);
            _count.set(this, 1);
            _price.set(this, product.getPrice());
        }

        // Getters/Setters
        getProduct() {
            return _product.get(this);
        }

        getPrice() {
            return _price.get(this);
        }

        getCount() {
            return _count.get(this);
        }

        // inc/dec the count when adding/removing a product
        incrementCount() {
            _count.set(this, _count.get(this) + 1);
            _price.set(this, Number(_price.get(this)) + Number(_product.get(this).getPrice()));
        }

        decrementCount() {
            let count = _count.get(this);
            if (count > 0) {
                _count.set(this, count - 1);
                _price.set(this, _price.get(this) - _product.get(this).getPrice());
            }
        }

    }

    return Item;
}());


export const Product = (function() {
    /*
     *   Intialize private instance variable as a WeakMap to
     *   store private data for an object or to hide implementation details
     */
    const _name = new WeakMap();
    const _id =  new WeakMap();
    const _price =  new WeakMap();
    const _image =  new WeakMap();


    class Product {
        /*
        *  Product class:
        *  carry the information that product have.
         */


        constructor(id, name, price, image) {
            _name.set(this,name);
            _id.set(this, id);
            _price.set(this, price);
            _image.set(this, image);
        }

        // Getters
        getId() {
            return _id.get(this);
        }

        getPrice(){
            return _price.get(this);
        }

        getName() {
            return _name.get(this);
        }

        getImage() {
            return _image.get(this);
        }
    }

    return Product;
}());


