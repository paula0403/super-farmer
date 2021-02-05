import { Render } from '../utils/Render';
export abstract class EmptyModal {
  protected modal: HTMLElement;
  protected modalContainer: HTMLElement;
  constructor() {
    this.modalContainer = Render.elementFactory('div', {
      className: 'modal__container',
    });
    this.modal = Render.elementFactory(
      'div',
      { className: 'modal' },
      this.modalContainer,
    );
  }

  /**
   * Hides modal - adds class with display:none
   */
  protected hideModal(): void {
    this.modal.classList.add('modal--hidden');
  }

  /**
   * Shows modal - removes class with display:none
   */
  protected showModal(): void {
    this.modal.classList.remove('modal--hidden');
  }
}
