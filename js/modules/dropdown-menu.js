import outsideCLick from './outsideclick.js';

export default class DropdownMenu {
    constructor(dropdrownMenu, events) {
        this.dropdrownMenu = document.querySelectorAll(dropdrownMenu);
        if (events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;
        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideCLick(element, this.events, () => {
        element.classList.remove('active');
    });
}

addDropdownMenuEvent() {
    this.dropdrownMenu.forEach((menu) => {
        this.events.forEach((userEvent) => {
            menu.addEventListener(userEvent, this.activeDropdownMenu);
        });
    });
}

init() {
    if (this.dropdrownMenu.length) {
        this.addDropdownMenuEvent();
    }
    return this;
}
}
