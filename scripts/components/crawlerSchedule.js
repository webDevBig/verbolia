class CrawlerSchedule {
    constructor(block) {
        this.block = document.querySelector(block);
    }

    init() {
        if(this.block) {
            this.blockToggle = this.block.querySelector('.block-toggle');
            this.areaCloning = this.block.querySelector('.area-cloning');
            this.numberRepetitions = this.block.querySelector('span.numberRepetitions');
            this.textInfo = this.block.querySelector('p.text-small');

            const countElement = this.block.querySelector('input[type="number"]');
            countElement.addEventListener('change', e => {
                this.count = e.target.value;
                if(!this.textInfo.classList.contains('active')) {
                    this.textInfo.classList.add('active');
                }
                let number = Math.round(24 / this.count);
                switch (number) {
                    case 1:
                        this.numberRepetitions.innerHTML = `${number} hour`;
                        break;
                    default:
                        this.numberRepetitions.innerHTML = `${number} hours`;
                        break;
                }
                this.initArea();
            });

            const checkElement = this.block.querySelector('input[name="manually"]');
            if (checkElement.checked) {
                this.blockToggle.classList.add('active');
            }
            checkElement.addEventListener('change', e => {
                this.blockToggle.classList.toggle('active');
            }, false);
        }
    }

    initArea() {
        const areasList = this.blockToggle.querySelectorAll('.area');
        if(areasList.length > 0) {
            const currentCount = areasList.length;
            if(currentCount < this.count) {
                for(let i = 0; i < (this.count - currentCount); i++) {
                    this.createCloningArea();
                }
            } else {
                for(let i = 0; i < (currentCount - this.count); i++) {
                    this.removeCloningArea();
                }
            }
        } else {
            for(let i = 0; i < this.count; i++) {
                this.createCloningArea();
            }
        }
    }

    createCloningArea() {
        const cloneArea = this.areaCloning.cloneNode(true);
        cloneArea.classList.remove('area-cloning');
        cloneArea.classList.add('area');
        this.blockToggle.appendChild(cloneArea);
        $('.area select').chosen({
            disable_search_threshold: 10
        });
    }

    removeCloningArea() {
        this.blockToggle.removeChild(this.blockToggle.lastElementChild);
    }
}
