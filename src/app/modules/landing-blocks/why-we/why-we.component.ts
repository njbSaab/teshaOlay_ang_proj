import { Component } from '@angular/core';
import { WhyWeCardInterface } from '../../shared/why-we-card/interface/why-we-card.interface';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.scss'],
})
export class WhyWeComponent {
  public whyWeBlock: WhyWeCardInterface[] = [
    {
      link: 'https://www.facebook.com/people/%D0%9A%D1%83%D0%BB%D1%96%D0%BD%D0%B0%D1%80%D0%BD%D1%96-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B8-%D0%B2%D1%96%D0%B4-%D1%82%D0%B5%D1%89%D1%96-%D0%9E%D0%BB%D1%96/100076023375220/',
      img: [
        'assets/images/facebook-1.svg',
        'assets/images/facebook-2.svg',
        'assets/images/facebook-1.svg',
        'assets/images/facebook-2.svg',
      ],
      title: 'Facebook',
      description: [
        'Більше 11 000 годин переглядів;',
        'На каналі 13 000+ підписників;',
      ],
      active: {
        numberOfActiveBlack: '13',
        numberOfActiveGreen: '000',
        titleActive: 'Підписників',
      },
    },
    {
      link: 'https://www.youtube.com/@u_teshchi_oli/videos',
      img: [
        'assets/images/youtube-1.svg',
        'assets/images/youtube-2.svg',
        'assets/images/youtube-1.svg',
        'assets/images/youtube-2.svg',
      ],
      title: 'Youtube',
      description: [
        'Більше 200 000+ переглядів',
        'На каналі 3400+ підписників;',
      ],
      active: {
        numberOfActiveBlack: '200',
        numberOfActiveGreen: '000',
        titleActive: 'Переглядів',
      },
    },
    {
      link: 'https://t.me/u_teshchi_oli',
      img: [
        'assets/images/telegram-2.svg',
        'assets/images/telegram-1.svg',
        'assets/images/telegram-2.svg',
        'assets/images/telegram-1.svg',
      ],
      title: 'Telegram',
      description: ['Наша группа з рецептами;', 'В планах 100+ рецептів;'],
      active: {
        numberOfActiveBlack: '100',
        numberOfActiveGreen: '',
        titleActive: 'Рецептів',
      },
    },
  ];
}
