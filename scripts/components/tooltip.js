class Tooltip {
    constructor() {
        this.offset = 16;
        this.init();
    }

    init() {
        let tooltipElement;
        let isTooltipPopup = false;
        let targetTooltipPopup;

        document.addEventListener('mouseover', (event) => {
            let target = event.target;
            let tooltipHtml = target.dataset.tooltip;
            if (!tooltipHtml) return;

            if(target.classList.contains('tooltip-popup') && target.classList.contains('active')) return;

            if(target.classList.contains('tooltip-popup')) {
                isTooltipPopup = true;
                target.classList.add('active');
                targetTooltipPopup = target;
            }

            tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.innerHTML = tooltipHtml;
            document.body.append(tooltipElement);

            let coords = target.getBoundingClientRect();
            let rightOffset = 0;
            let left = coords.left + (target.offsetWidth - tooltipElement.offsetWidth) / 2;
            if (left < 0) {
                left = 0;
            }
            let right = coords.right - (target.offsetWidth - tooltipElement.offsetWidth) / 2;
            if (right > document.documentElement.clientWidth) {
                rightOffset = right - document.documentElement.clientWidth;
            }
            let top = coords.top - tooltipElement.offsetHeight - this.offset;
            if (top < 0) {
                top = coords.top + target.offsetHeight + this.offset;
            }
            if(target.classList.contains('tooltip-bottom')) {
                tooltipElement.classList.add('tooltip-bottom');
                top = coords.top + this.offset + 15;
            }
            if(target.classList.contains('tooltip-sidebar')) {
                tooltipElement.classList.add('tooltip-sidebar');
            }
            if(target.classList.contains('tooltip-link')) {
                tooltipElement.classList.add('tooltip-link');
            }
            tooltipElement.style.left = left - rightOffset + 'px';
            tooltipElement.style.top = top + 'px';

        });

        document.addEventListener('mouseout', () => {
            if (tooltipElement && !isTooltipPopup) {
                tooltipElement.remove();
                tooltipElement = null;
            }
        });

        document.addEventListener('click', () => {
            if (tooltipElement && isTooltipPopup) {
                tooltipElement.remove();
                tooltipElement = null;
                isTooltipPopup = false;
                targetTooltipPopup.classList.remove('active');
            }
        })
    }
}
