import { Component } from '@angular/core';
import { CommentInterface } from '../../shared/card-food/interfaces/comment-interface';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.scss'],
})
export class CommentBlockComponent {
  public content: CommentInterface[] = [
    {
      img: 'assets/images/comments1.svg',
      title: 'Шевчук Назар',
      description:
        'Найращі рецепти, дуже дешево та дійсно смачно, дякую. Рекомендую брати все меню, бо краще разом взяти та заощадити кошти.',
    },
    {
      img: 'assets/images/comment6.svg',
      title: 'Соловський Сергій',
      description:
        'За копійки рецепти на весь тиждень, тепер не буду паритись, що готувати.',
    },
    {
      img: 'assets/images/comment4.svg',
      title: 'Кичко Ніна',
      description:
        'Інгредієнти дійсно підібрані чудово, файні страви.',
    },
    {
      img: 'assets/images/comment7.svg',
      title: 'Сілінченко Марина',
      description:
        'Вже купую третій раз, жалкую що не замовила зразу всі три меню.',
    },
    {
      img: 'assets/images/comment5.svg',
      title: 'Лисенко Діана',
      description:
        'Дякую, що зекономили мій час. Діти та чоловік захваті, а я задоволена.',
    },
    {
      img: 'assets/images/comment3.svg',
      title: 'Гурська Аліна',
      description:
        'Дуже зручно, всі пропорції, а саме головне є навіть відео як все це готувати.',
    },
  ];

}
