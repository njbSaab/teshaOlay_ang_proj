import { Component, HostListener } from '@angular/core';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    //при скролле отключаем меню бургер
    this.menuVariable = false;
    this.menuBtnVariable = false
    this.menuHeaderVariable = false

    //при скролле отключаем хедер
    let scrollPosition = window.pageYOffset;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    this.headerNone = scrollPosition > this.lastScroll
    this.lastScroll = scrollPosition;
  }

  public lastScroll = 0
  public headerNone = false
  public menuVariable = false;
  public menuBtnVariable = false;
  public menuHeaderVariable = false;

  constructor(private popupService: PopupService) {}
  openPopup() {
    this.popupService.openPopup();
  }

  openMenu = () => {
    this.menuVariable = !this.menuVariable;
    this.menuBtnVariable = !this.menuBtnVariable;
    this.menuHeaderVariable = !this.menuHeaderVariable;
  };
}
