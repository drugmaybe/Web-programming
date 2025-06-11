import _ from 'lodash';

// BEGIN
export default class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        if (!item || typeof item !== 'object' || !item.name || !item.price) {
            throw new Error('Invalid item object');
        }
        if (typeof count !== 'number' || count <= 0) {
            throw new Error('Count must be a positive number');
        }

        this.items.push({ item: _.cloneDeep(item), count });
    }

    getItems() {
        return _.cloneDeep(this.items);
    }

    getCost() {
        return this.items.reduce((total, { item, count }) => total + item.price * count, 0);
    }

    getCount() {
        return this.items.reduce((total, { count }) => total + count, 0);
    }
}
// END
