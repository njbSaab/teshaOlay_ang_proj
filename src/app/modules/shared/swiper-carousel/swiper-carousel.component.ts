import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFlip,

} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SingleMenuInterface } from '../card-food/interfaces/single-menu-interface';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFlip]);
@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.scss'],

})
export class SwiperCarouselComponent implements OnInit {
  countSlider = 0;
  arrLength: number = 0;

  @Input() singleMenu: SingleMenuInterface | undefined;

  @ViewChild('swiper1') swiper1!: SwiperComponent;
  ngOnInit(): void {
    this.arrLength = this.singleMenu?.images.length ?? 0;
  }
  ngAfterContentChecked(): void {
    if (this.swiper1) {
      this.swiper1.swiperRef.autoplay?.start();
    }
  }
  onSwiperSlideChange(): void {
    this.countSlider = this.swiper1.swiperRef.realIndex;
  }

  onPrevClick(): void {
    this.swiper1.swiperRef.slidePrev();
  }

  onNextClick(): void {
    this.swiper1.swiperRef.slideNext();
  }
}
