class TabHorizontal {
    constructor(linkSelector = '.tab-set__link', parentSelector = '.tab-set', activeClassName = 'active') {
        this.linkSelector = linkSelector
        this.parentSelector = parentSelector
        this.active = activeClassName;
        this.listTabSetLink = document.querySelectorAll(this.linkSelector);
    }

    init() {
        if(this.listTabSetLink.length) {
            this.listTabSetLink.forEach(link => {
                if(link.classList.contains(this.active)) {
                    this.showTab(link);
                }

                link.addEventListener('click', () => {
                    if(!link.classList.contains(this.active)) {
                        this.toggleTab(link);
                    }
                });
            });
        }
    }

    showTab(link) {
        const tabId = link.getAttribute('data-tab');
        const tab = document.getElementById(tabId);
        tab.classList.add(this.active);
    }

    closeTab(link) {
        const tabId = link.getAttribute('data-tab');
        const tab = document.getElementById(tabId);
        tab.classList.remove(this.active);
        link.classList.remove(this.active);
    }

    toggleTab(link) {
        const tabSet = link.closest(this.parentSelector);
        const listLink = tabSet.querySelectorAll(this.linkSelector);
        listLink.forEach(e => {
            if(e.classList.contains(this.active)) {
                this.closeTab(e);
            }
        });
        this.showTab(link);
        link.classList.add(this.active);
    }
}
