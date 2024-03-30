import { Component } from '@angular/core';
import { SingleMenuInterface } from '../../shared/card-food/interfaces/single-menu-interface';
import { RecipesItems } from '../../shared/interfaces/recipesItems.interface';

@Component({
  selector: 'app-single-menu-block',
  templateUrl: './single-menu-block.component.html',
  styleUrls: ['./single-menu-block.component.scss'],
})
export class SingleMenuBlockComponent {
  public singleMenuBlock: SingleMenuInterface[] = [
    {
      title: 'Cніданок',
      firstText: ' Ви отримаєте інструкцію',
      greenText: '7 сніданків',
      description:
        'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного сніданку.',
      price: 99,
      currency: '₴',
      images: [
        'assets/images/1.jpg',
        'assets/images/1.7.jpg',
        'assets/images/1.3.jpg',
        'assets/images/1.4.jpg',
        'assets/images/1.6.jpg',
        'assets/images/1.5.jpg',
      ],
      recipeType: RecipesItems.Breakfast,
    },
    {
      title: 'Обід',
      firstText: ' Ви отримаєте інструкцію',
      greenText: '7 oбідів',
      description:
        'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного обіду.',
      price: 99,
      currency: '₴',
      images: [
        'assets/images/2.3.jpg',
        'assets/images/2.jpeg',
        'assets/images/2.2.jpg',
        'assets/images/2.1.jpg',
      ],
      recipeType: RecipesItems.Lunch,
    },
    {
      title: 'Вечеря',
      firstText: ' Ви отримаєте інструкцію',
      greenText: '7 вечерь',
      description:
        'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожної вечері.',
      price: 99,
      currency: '₴',
      images: [
        'assets/images/3.7.jpg',
        'assets/images/3.3.jpg',
        'assets/images/3.4.jpg',
        'assets/images/3.6.jpg',
        'assets/images/3.8.jpg',
        'assets/images/3.9.jpg',
      ],
      recipeType: RecipesItems.Dinner,
    },
  ];
}
