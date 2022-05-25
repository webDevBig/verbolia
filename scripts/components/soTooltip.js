class SoTooltip {
  constructor() {
    this.active = 'active';
  }

  init() {
    this.listeners();
  }

  listeners() {

    const button = document.querySelector('[data-so-tooltip]');
    const tooltip = document.querySelector(button.getAttribute('data-so-tooltip'));
    const instance = Popper.createPopper(button, tooltip, {
      placement: 'right',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 18],
          },
        },
      ],
    });

    function show() {
      tooltip.setAttribute('data-show', '');
    
      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      instance.update();
    }
    
    function hide() {
      tooltip.removeAttribute('data-show');
    }
    
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];
    
    showEvents.forEach((event) => {
      button.addEventListener(event, show);
    });
    
    hideEvents.forEach((event) => {
      button.addEventListener(event, hide);
    });
    
  }
}