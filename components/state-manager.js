AFRAME.registerComponent('state-manager', {
  init() {
    this.el.addEventListener('click', () => {
      document.querySelectorAll('.clickable').forEach(ring => {
        if (ring !== this.el) {
          ring.setAttribute('material', 'opacity: 0.35');
          ring.removeAttribute('auto-rotate');
        }
      });
    });

    document.querySelector('#closeButton')?.addEventListener('click', () => {
      document.querySelectorAll('.clickable').forEach(ring => {
        ring.setAttribute('material', 'opacity: 1');
        ring.setAttribute('auto-rotate', '');
      });
    });
  }
});