import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkModeStatus: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  darkModeActivation(): void {
    this.document.body.classList.toggle('dark-mode');
    if (this.darkModeStatus) {
      this.darkModeStatus = false;
    } else {
      this.darkModeStatus = true;
    }
  }
}
