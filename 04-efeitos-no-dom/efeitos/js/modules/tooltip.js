export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseLeave = {
    handleEvent() {
      this.toolipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    },
  };

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.toolipBox = tooltipBox;
    onMouseLeave.element = this; // OBS: 'this' é o mapa
    this.addEventListener('mouseleave', onMouseLeave);
  }

  function criarTooltipBox(element) {
    const toolipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolipBox.classList.add('tooltip');
    toolipBox.innerText = text;

    document.body.appendChild(toolipBox);

    return toolipBox;
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
