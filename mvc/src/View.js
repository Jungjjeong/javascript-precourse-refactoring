export default class View{
    constructor(list) {
        this.toDoList = document.querySelector('.to-do-list');
        this.finishedList = document.querySelector('.finished-list');
        this.list = list;
    }

    showList(list) {
        this.finishedList.innerHTML = '';
        this.toDoList.innerHTML = '';

        list.forEach((item, i) => {
            if(!item.finished) {
                console.log(item);
                const toDoItemHTML = 
                        '<li class="to-do-list__item" id="item-'+ i +'">' +
                            '<div class="item__content">'+item.content+'</div>' +
                            '<div class="item__action">' +
                                '<i class="fa fa-trash"></i>' +
                                '<input type="checkbox">' +
                            '</div>' +
                        '</li>';
                this.toDoList.insertAdjacentHTML('afterbegin', toDoItemHTML);
                console.log(item.content);
                return;
            }
            
            const finishedItemHTML = 
                        '<li class="to-do-list__item" id="item-'+ i +'">' +
                            '<div class="item__content">'+item.content+'</div>' +
                            '<div class="item__action">' +
                                '<i class="fa fa-trash"></i>' +
                                '<input type="checkbox" checked>' +
                            '</div>' +
                        '</li>';
                this.finishedList.insertAdjacentHTML('afterbegin', finishedItemHTML);
        });
    }
}