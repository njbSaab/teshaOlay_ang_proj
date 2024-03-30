import {Component, Input, OnInit, ViewChild,} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,

} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { WhyWeCardInterface } from "../why-we-card/interface/why-we-card.interface";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCube, ]);

@Component({
  selector: 'app-social-slider',
  templateUrl: './social-slider.component.html',
  styleUrls: ['./social-slider.component.scss'],

})
export class SocialSliderComponent implements OnInit {
  @Input() whyWeCardData: WhyWeCardInterface | undefined;

  @ViewChild('socialSlider') socialSlider!: SwiperComponent;
  ngOnInit(): void {
  }
  ngAfterContentChecked(): void {
    if (this.socialSlider) {
      this.socialSlider.swiperRef.autoplay?.start();
    }
  }
}
