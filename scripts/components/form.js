class Form {
    constructor(block) {
        this.active = 'active';
        this.blocks = Array.prototype.slice.call(document.querySelectorAll(`${block}`));
    }

    init() {
        if(this.blocks.length) {
            this.blocks.forEach(block => this.listeners(block));
        }
    }

    listeners(block) {
        const btnEdit = block.querySelector('.edit');
        const fieldEdit = block.querySelector('.form__field-holder *');
        const btnValidate = block.querySelector('.validate');
        const btnCancel = block.querySelector('.cancel');
        btnEdit.addEventListener('click', (event) => {
            event.preventDefault();
            if(btnValidate || btnCancel) {
                if(fieldEdit.hasAttribute('disabled')) {
                    block.classList.add(this.active);
                    fieldEdit.removeAttribute('disabled');
                    fieldEdit.focus();
                }
                btnValidate.addEventListener('click', event => {
                    this.close(block, fieldEdit);
                });
                btnCancel.addEventListener('click', event => {
                    this.close(block, fieldEdit);
                });
            } else {
                if(fieldEdit.hasAttribute('disabled')) {
                    fieldEdit.removeAttribute('disabled');
                    fieldEdit.focus();
                } else {
                    this.close(block, fieldEdit);
                }
                this.clickOutside(block, fieldEdit);
            }
        });
    }

    clickOutside(block, fieldEdit) {
        document.addEventListener('click', (event) => {
            const isElementInside = block.contains(event.target);
            if (!isElementInside) {
                this.close(block, fieldEdit);
            }
        });
    }

    close(block, fieldEdit) {
        fieldEdit.blur();
        fieldEdit.setAttribute('disabled', 'disabled');
        block.classList.remove(this.active);
    }
}
