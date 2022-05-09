import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoSearchModalService {
  showModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isModalUp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  getModalStatus() {
    return this.showModal.asObservable();
  }

  openModal() {
    this.showModal.next(true);
    this.renderer.addClass(document.body, 'scroll-disabled');
  }

  closeModal() {
    this.showModal.next(false);
    this.renderer.removeClass(document.body, 'scroll-disabled');
  }

  getModalTop() {
    return this.isModalUp.asObservable();
  }

}
