class MobileMenu {
    constructor(menu) {
        this.menu = document.querySelector(menu);
        this.button = document.querySelector('.btn-toggle-sidebar');
        this.userBlock = document.querySelector('.user-block');
    }

    init() {
        this.button.addEventListener('click', (event) => {
            event.preventDefault();
            this.openMenu();
            this.clickOutside();
            this.resizeWindow();
        });
    }

    openMenu() {
        this.menu.classList.add('active');
        this.userBlock.classList.add('active');
        document.body.classList.add('body-opacity');
    }

    closeMenu() {
        this.menu.classList.remove('active');
        this.userBlock.classList.remove('active');
        document.body.classList.remove('body-opacity');
    }

    clickOutside() {
        document.addEventListener('click', (event) => {
            const isElementInside = this.menu.contains(event.target);
            const isButtonInside = this.button.contains(event.target);
            const isUserBlockInside = this.userBlock.contains(event.target);
            if (!isElementInside && !isButtonInside && !isUserBlockInside) {
                this.closeMenu();
            }
        });
    }

    resizeWindow() {
        window.addEventListener('resize', () => {
            this.closeMenu();
        });
    }
}
