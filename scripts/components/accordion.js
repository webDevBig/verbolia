class Accordion {
    constructor(heading, hasParent = false) {
        this.hasParent = hasParent;
        this.heading = heading;
        this.active = 'collapsible-active';
        this.parent = '.collapsible-parent';
    }

    init() {
        if (document.querySelector(this.heading)) {
            const accordionHeading = document.querySelectorAll(this.heading);

            accordionHeading.forEach((item) => {

                item.addEventListener('click', (event) => {
                    event.preventDefault();

                    if (item.classList.contains(this.active)) {
                        item.classList.remove(this.active);
                        if(this.hasParent) {
                            item.closest(this.parent).classList.remove(this.active);
                        }
                    } else {
                        accordionHeading.forEach(element => {
                            element.classList.contains(this.active) ?
                                this.toggle(element) : null;
                        });
                        item.classList.add(this.active);
                        if(this.hasParent) {
                            item.closest(this.parent).classList.add(this.active);
                        }
                    }
                });
            });
        }
    }

    toggle(element) {
        element.classList.remove(this.active);
        if(this.hasParent) {
            element.closest(this.parent).classList.remove(this.active);
        }
    }
}
