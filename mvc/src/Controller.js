import Model from "./Model.js";
import View from "./View.js";

export default class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.form = document.forms['list-form'];
        this.addInput = this.form['add-item__input'];
        this.searchInput = this.form['search-item__input'];
        this.section = document.querySelector('section');
        this.setfunction();
    }

    setfunction() {
        this.addItem();
        this.searchItem();
        this.removeItem();
        this.checkItem();
    }

    addItem() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            const addVal = this.addInput.value;
            console.log(addVal);

            this.model.addItem(addVal);
            console.log(this.model.list);
            this.view.showList(this.model.list);

            this.form.reset();
        });
    }

    searchItem() {
        this.searchInput.addEventListener('input', e => {
            e.preventDefault();
            const searchVal = this.searchInput.value;

            const filterList = this.model.list.filter((item) => {
                return item.content.indexOf(searchVal) > -1;
            });

            this.view.showList(filterList);
        })
    }

    removeItem() {
        this.section.addEventListener('click', e => {

            if(e.target.tagName !== 'I') return;
            console.log('remove');
            const itemId = e.target.parentNode.parentNode.id;
            const itemIndex = itemId.split('-')[1];

            this.model.removeItem(itemIndex);

            this.view.showList(this.model.list);
        })
    }

    checkItem() {
        this.section.addEventListener('change', e => {

            console.log('check');
            if(e.target.tagName !== 'INPUT') return;

            const itemId = e.target.parentNode.parentNode.id;
            const itemIndex = itemId.split('-')[1];

            this.model.checkItem(itemIndex);

            this.view.showList(this.model.list);
        })
    }
}