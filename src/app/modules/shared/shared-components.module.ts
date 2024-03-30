import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardFoodComponent } from './card-food/card-food.component';
import { CommentsComponent } from './comments/comments.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';

import { MainButtonComponent } from './main-button/main-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

import { SwiperCarouselComponent } from './swiper-carousel/swiper-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { CommentsSliderComponent } from './comments-slider/comments-slider.component';
import { PopupComponent } from './popup/popup.component';
import { AfterPopupWindowComponent } from './after-popup-window/after-popup-window.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PopupMainBlockComponent } from './popup-main-block/popup-main-block.component';
import { WhyWeCardComponent } from './why-we-card/why-we-card.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TelegramFormBotService } from './services/telegram-form-bot';
import { HttpClientModule } from '@angular/common/http';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { SocialSliderComponent } from './social-slider/social-slider.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import {AccordionComponent} from "./accordion/accordion.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardFoodComponent,
    CommentsComponent,
    SingleMenuComponent,
    MainButtonComponent,
    SwiperCarouselComponent,
    CommentsSliderComponent,
    PopupComponent,
    AfterPopupWindowComponent,
    PopupMainBlockComponent,
    BurgerMenuComponent,
    WhyWeCardComponent,
    SocialSliderComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardFoodComponent,
    CommentsComponent,
    SingleMenuComponent,
    MainButtonComponent,
    SwiperCarouselComponent,
    CommentsSliderComponent,
    WhyWeCardComponent,
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        SwiperModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxMaskDirective,
        MatExpansionModule,
        AccordionComponent,
    ],
  providers: [TelegramFormBotService, provideNgxMask()],
})
export class SharedComponentsModule {}
