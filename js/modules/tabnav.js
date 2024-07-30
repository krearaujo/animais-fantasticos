export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'ativo';
    }

    activeTab(index) {
        this.tabContent.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activeTab(index));
        });
    }
    
    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            this.activeTab(0);
            this.addTabNavEvent();
        }
        return this;
    }
}