class CheckAll {
    constructor(block) {
        this.block = document.querySelector(`${block}`);
    }

    init() {
        if (this.block) {
            this.checkList = this.block.querySelectorAll('tr:not(.row-off) input[name="check"]:not([disabled])');
            this.checkListLenght = this.checkList.length;
            this.checkAll = this.block.querySelector('input#checkAll');

            this.blockActionsToggle = true;
            this.blockActions = document.querySelector('.block-table__actions');

            let checkCount = 0;

            this.checkAll.addEventListener('change', (e) => {
                this.checkList.forEach(item => {
                    if(e.target.checked) {
                        if(!item.checked) {
                            checkCount++;
                        }
                        item.checked = true;
                    } else {
                        if(item.checked) {
                            checkCount--;
                        }
                        item.checked = false;
                    }
                });

                this.toggleBlocks(checkCount);
            });

            this.checkList.forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    if(e.target.checked) {
                        checkCount++;

                    } else {
                        checkCount--;
                        if(this.checkAll.checked) {
                            this.checkAll.checked = false;
                        }
                    }

                    if(checkCount === this.checkListLenght) {
                        this.checkAll.checked = true;
                    }

                    this.toggleBlocks(checkCount);
                });
            });
        }
    }

    toggleBlocks(count) {}
}
