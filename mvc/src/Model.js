class Item {
    constructor(content) {
        this.content = content
        this.finished = false;
    }
}

export default class Model {
    constructor(content) {
        this.list = [];
    }


    addItem(content) {
        this.item = new Item(content);
        this.list.push(this.item);
    }

    removeItem(itemIndex) {
        this.list.splice(itemIndex, 1);
    }

    checkItem(itemIndex) {
        const currentItem = this.list[itemIndex];
        currentItem.finished = !currentItem.finished;
    }
}