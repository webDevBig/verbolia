class Popup {
    constructor(block, isSlide = false) {
        this.active = 'popup-active';
        this.isSlide = isSlide;
        this.blocks = Array.prototype.slice.call(document.querySelectorAll(`${block}`));
        this.textTitle;
    }

    init() {
        if(this.blocks.length) {
            this.blocks.forEach(block => this.listeners(block));
        }
    }

    listeners(block) {
        block.style.position = 'relative';
        if(this.isSlide) {
            block.classList.add('block-slide-popup');
        }
        const btnOpenBlock = block.querySelector(`.popup-open`);
        const contentBlock = block.querySelector(`.popup-content`);
        const btnCloseList = block.querySelectorAll(`.popup-close`);

        if(btnOpenBlock) {
            btnOpenBlock.addEventListener('click', (event) => {
                event.preventDefault();
                contentBlock.classList.toggle(this.active);
                block.classList.toggle('parent-popup-active');

                if(block.classList.contains('block-edit-template')) {
                    this.textTitle = block.querySelector('.row-text p.text .text-js').innerHTML;
                    block.querySelector('.row-action .form__field-holder .edit_input').value = this.textTitle;
                }

                if (contentBlock.classList.contains(this.active)) {
                    if(!this.isSlide) {
                        this.clickOutside(block, contentBlock);
                    }
                    this.close(btnCloseList, block, contentBlock);
                }
            });
        }
    }

    clickOutside(block, contentBlock) {
        document.addEventListener('click', (event) => {
            const isElementInside = block.contains(event.target);
            if (!isElementInside) {
                contentBlock.classList.remove(this.active);
                block.classList.remove('parent-popup-active');

                this.inputText(block);
                this.changeTitle(block);
            }
        });
    }

    close(btnCloseList, block, contentBlock) {
        if(btnCloseList.length) {
            btnCloseList.forEach(btnClose => {
                btnClose.addEventListener('click', e => {
                    e.preventDefault();
                    contentBlock.classList.remove(this.active);
                    block.classList.remove('parent-popup-active');

                    if(!e.target.classList.contains('cancel')) {
                        this.inputText(block);
                        this.changeTitle(block);
                    }
                });
            });
        }
    }

    inputText(block) {
        if(block.querySelector('#textContent')) {
            const text = block.querySelector('#textContent').value;
            if(text.length > 0) {
                const parent = block.parentElement.parentElement;
                if(parent.classList.contains('block-editor__no-content')) {
                    parent.querySelector('.block-edit-template .row-text p.text .text-js').innerHTML = text;
                    parent.classList.remove('block-editor__no-content');
                }
            }
        }

        if(block.classList.contains('block-add-stopwords')) {
            const panelBadge = block.querySelector('.no-content p.panel-badges');
            const formStopWords = block.querySelector('.form__stop-words');
            const listStopWords = formStopWords.querySelectorAll('span.badge');
            if(listStopWords.length) {
                panelBadge.innerHTML = '';
                panelBadge.nextElementSibling.innerHTML = 'Edit Stopwords';

                listStopWords.forEach(stopWord => {
                    const element = document.createElement('span');
                    element.classList.add('badge', 'green', 'badge-small');
                    element.innerHTML = stopWord.textContent;
                    panelBadge.appendChild(element);
                });

                switch (listStopWords.length) {
                    case 1:
                        document.querySelector('span.stopWords-text span.count').innerHTML = `${listStopWords.length} product`;
                        break;
                    default:
                        document.querySelector('span.stopWords-text span.count').innerHTML = `${listStopWords.length} products`;
                        break;
                }
            } else {
                document.querySelector('span.stopWords-text span.count').innerHTML = "No products";
                panelBadge.innerHTML = 'No stopwords';
                panelBadge.nextElementSibling.innerHTML = 'Add content';
            }
        }
    }

    changeTitle(block) {
        if(block.classList.contains('block-edit-template')) {
            const text = block.querySelector('.row-action .form__field-holder .edit_input').value;
            block.querySelector('.row-text p.text .text-js').innerHTML = text;
        }
    }
}
