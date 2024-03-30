import {Component, HostListener, Input} from '@angular/core';
import { CardFoodInterface } from '../../shared/card-food/interfaces/card-food-interface';
import { AccordionInterface } from '../../shared/interfaces/accordion.interface';
import { RecipesItems } from '../../shared/interfaces/recipesItems.interface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.scss'],
})
export class MenuBlockComponent {
  public recipeType: RecipesItems = RecipesItems.AllRecipes;
  public menu: CardFoodInterface[] = [
    {
      img: 'assets/images/menu2.svg',
      title: 'Сніданки',
      firstDescription: '7 сніданків',
      description:
        'З переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного сніданку.',
      price: 99,
    },
    {
      img: 'assets/images/menu3.svg',
      title: 'Обіди',
      firstDescription: '7 обідів',
      description:
        'З переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного обіду.',
      price: 99,
    },
    {
      img: 'assets/images/menu1.svg',
      title: 'Вечері',
      firstDescription: '7 вечерь',
      description:
        'З переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожної вечері.',
      price: 99,
    },
  ];

  public accordeonData: AccordionInterface[] =[
    {
      text: 'Ви отримаєте 7 рецептів сніданків',
      textNext:
        'З переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного сніданку.',
    },
    {
      text: 'Ви отримаєте 7 рецептів обідів',
      textNext:
        'З переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного обіду.',
    },
    {
      text: 'Ви отримаєте 7 рецептів вечерь',
      textNext:
        'З переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожної вечері.',
    }
  ]
  constructor(private matDialog: MatDialog) {
  }

  openPopup() {
    this.matDialog.open(PopupComponent, {
      enterAnimationDuration: '700ms',
      data: this.recipeType,
    });
  }

}
