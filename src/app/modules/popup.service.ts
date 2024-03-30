import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './shared/popup/popup.component';
import {PopupMainBlockComponent} from "./shared/popup-main-block/popup-main-block.component";

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}
  openPopup() {
    this.dialog.open(PopupComponent, {
      enterAnimationDuration: '700ms',
    });
  }
  openMainPopup() {
    this.dialog.open(PopupMainBlockComponent, {
      enterAnimationDuration: '700ms',
    });
  }
}
