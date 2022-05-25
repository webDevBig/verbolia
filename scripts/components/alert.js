class Alert {
    constructor() {
        this.blocks = document.querySelectorAll('.alert');
    }

    init() {
        if(this.blocks.length) {
            this.blocks.forEach(block => this.listeners(block));
        }
    }

    listeners(block) {
        const btnClose = block.querySelector('.alert__close');
        btnClose.addEventListener('click', e => {
            e.preventDefault();
            block.classList.remove('show');
        });
    }
}
