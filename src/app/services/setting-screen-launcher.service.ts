import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingScreenLauncherService {
  renderer: Renderer2;
  modalType: BehaviorSubject<'connect' | 'settings' | 'roi' | 'lottery' | 'token'> = new BehaviorSubject<'connect' | 'settings' | 'roi' | 'lottery' | 'token'>('settings');
  showModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showMoreWallet: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  getModalType() {
    return this.modalType.asObservable();
  }

  getShowModal() {
    return this.showModal.asObservable();
  }

  getShowMoreWallet() {
    return this.showMoreWallet.asObservable();
  }

  openModal(type: 'connect' | 'settings' | 'roi' | 'lottery' | 'token'): void {
    this.modalType.next(type);
    this.showModal.next(true);
    this.renderer.addClass(document.body, 'scroll-disabled');
  }

  closeModal(): void {
    this.showModal.next(false);
    this.showMoreWallet.next(false);
    this.renderer.removeClass(document.body, 'scroll-disabled');
  }

}
