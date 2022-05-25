class ChosenPopup {
    constructor() {
        this.chosenSortList = document.querySelectorAll('.chosen-popup');
        this.active = 'chosen-container-active';
        this.drop = 'chosen-with-drop';
        
    }

    init() {
        if (this.chosenSortList.length) {
            this.chosenSortList.forEach(block => this.listeners(block));
        }
    }

    listeners(block) {
        const linkChosen = block.querySelector('a.chosen-single');
        linkChosen.addEventListener('click', (e) => {
            e.preventDefault();
            block.classList.toggle(this.active);
            block.classList.toggle(this.drop);

            if (block.classList.contains(this.active)) {
                this.clickOutside(block);
            }

            if (block.classList.contains('chosen-panel-checked-action')) {
                const listPanelAction = document.querySelectorAll('.panel-checked-action');
                listPanelAction.forEach(panel => {
                    if (listPanelAction.classList.contains('active')) {
                        panel.classList.remove('active');
                    }
                });
            }
        });
        

        const closeLinksList = block.querySelectorAll('.active-result a');
        if (closeLinksList.length) {
            closeLinksList.forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    block.classList.toggle(this.active);
                    block.classList.toggle(this.drop);
                });
            });
        }
    }

    clickOutside(block) {
        document.addEventListener('click', (event) => {
            const isElementInside = block.contains(event.target);
            if (!isElementInside) {
                block.classList.remove(this.active);
                block.classList.remove(this.drop);
            }
        });
    }
}
