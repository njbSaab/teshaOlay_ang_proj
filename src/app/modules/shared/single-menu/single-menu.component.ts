import { Component, Input } from '@angular/core';
import { SingleMenuInterface } from '../card-food/interfaces/single-menu-interface';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.scss'],
})
export class SingleMenuComponent {
  @Input() singleMenu: SingleMenuInterface | undefined;
  @Input() isRevers: boolean = false;
  @Input() isReversText: boolean = false;

  constructor(private matDialog: MatDialog) {}

  openPopup() {
    this.matDialog.open(PopupComponent, {
      enterAnimationDuration: '700ms',
      data: this.singleMenu?.recipeType,
    });
  }
}
