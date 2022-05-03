import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  renderer: Renderer2;
  darkModeStatus: boolean = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  darkModeActivation(): void {
    if (this.darkModeStatus) {
      this.darkModeStatus = false;
      this.renderer.removeClass(document.body, 'dark-mode');
    } else {
      this.darkModeStatus = true;
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }
}
