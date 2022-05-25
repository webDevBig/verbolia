class TableCreateAssets {
    constructor() {
        this.table = document.querySelector('table.table-assets');
        this.data = 'data-column';
        this.inactiveClass = 'inactive';
        this.countActive = 0;
        this.maxCount = 9;
    }

    init() {
        if(this.table) {
            this.textInfo = this.table.querySelector('p.text-info');
//            this.form = this.table.querySelector('.block-assets__form');
            this.form = document.querySelector('.block-assets__form');
            this.rowList = this.form.querySelectorAll('.row');
            this.checkboxList = this.form.querySelectorAll('.row input[type="checkbox"]');
            this.tableThData = this.table.querySelectorAll(`th[${this.data}]`);
            this.tableTdData = this.table.querySelectorAll(`td[${this.data}]`);
            this.checkboxList.forEach(checkbox => {
                this.setColumns(checkbox);
                checkbox.addEventListener('change', () => {
                    if(checkbox.checked) {
                        this.setColumns(checkbox);
                    } else {
                        this.countActive--;
                        this.setColumns(checkbox);
                    }
                    this.checkCount();
                })
            });
            
            new Sortable(this.form, {
                animation: 150,
                ghostClass: 'sortable-ghost-chosen',
                onEnd: function (evt) {
                    const currentEl = evt.item;
                    const attrMove = currentEl.querySelector('input[type="checkbox"]').getAttribute('data-column');
                    const prevEl = currentEl.previousElementSibling;
                    let attrBefore = '';
                    if(prevEl) {
                        attrBefore = prevEl.querySelector('input[type="checkbox"]').getAttribute('data-column');

                    } else {
                        attrBefore = 'default';
                    }

                    const thMove = document.querySelector(`table.table-assets th[data-column=${attrMove}]`);
                    const thBefore = document.querySelector(`table.table-assets th[data-column=${attrBefore}]`);
                    thBefore.after(thMove);
                    const rowList = document.querySelectorAll('table.table-assets tbody tr');
                    rowList.forEach(row => {
                        const tdMove = row.querySelector(`td[data-column=${attrMove}]`);
                        const tdBefore = row.querySelector(`td[data-column=${attrBefore}]`);
                        tdBefore.after(tdMove);
                    });
                }
            });
        }
    }

    setColumns(checkbox) {
        const attr = checkbox.getAttribute(`${this.data}`);
        if(checkbox.checked && this.countActive < this.maxCount ) {
            this.countActive++;
            this.setActive(attr);
        } else {
            this.setInactive(attr);
        }
    }

    checkCount() {
        if(this.countActive === this.maxCount) {
            this.checkboxList.forEach(item => {
                if(!item.checked) {
                    item.disabled = true;
                }
            });
//            if(!this.textInfo.classList.contains('active')) {
//                this.textInfo.classList.add('active');
//            }
        }

        if(this.countActive < this.maxCount) {
            this.checkboxList.forEach(item => {
                if(!item.checked) {
                    item.disabled = false;
                }
            });
//            if(this.textInfo.classList.contains('active')) {
//                this.textInfo.classList.remove('active');
//            }
        }
    }

    setActive(attr) {
        this.tableThData.forEach(cell => this.removeInactiveClass(cell, attr));
        this.tableTdData.forEach(cell => this.removeInactiveClass(cell, attr));
    }

    setInactive(attr) {
        this.tableThData.forEach(cell => this.addInactiveClass(cell, attr));
        this.tableTdData.forEach(cell => this.addInactiveClass(cell, attr));
    }

    addInactiveClass(cell, attr) {
        if(attr === cell.getAttribute(`${this.data}`)) {
            if(!cell.classList.contains(`${this.inactiveClass}`)) {
                cell.classList.add(`${this.inactiveClass}`);
            }
        }
    }

    removeInactiveClass(cell, attr) {
        if(attr === cell.getAttribute(`${this.data}`)) {
            if(cell.classList.contains(`${this.inactiveClass}`)) {
                cell.classList.remove(`${this.inactiveClass}`);
            }
        }
    }

    moveColumn(attrMove, attrBefore) {

    }
}
