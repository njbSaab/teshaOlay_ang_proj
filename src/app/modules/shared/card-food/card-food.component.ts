import { Component, HostListener, Input } from '@angular/core';
import { CardFoodInterface } from './interfaces/card-food-interface';
import {AccordionComponent} from "../accordion/accordion.component";
import {AccordionInterface} from "../interfaces/accordion.interface";

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss'],
})
export class CardFoodComponent {
  @Input() cardData: CardFoodInterface | undefined;
  @Input() accordionData: AccordionInterface | undefined;

  @HostListener('window:resize')
  onWindowResize(): void {
    // Handle resize logic here
  }

  isAccordionVisible(): boolean {
    return window.innerWidth <= 1200;
  }
}
