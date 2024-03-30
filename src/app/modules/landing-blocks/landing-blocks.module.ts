import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTopBlockComponent } from './main-top-block/main-top-block.component';
import { ProfileBlockComponent } from './profile-block/profile-block.component';
import { ForWhomBlockComponent } from './for-whom-block/for-whom-block.component';
import { WhyWeComponent } from './why-we/why-we.component';
import { MenuBlockComponent } from './menu-block/menu-block.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { SingleMenuBlockComponent } from './single-menu-block/single-menu-block.component';
import { CommentBlockComponent } from './comment-block/comment-block.component';
import { MatButtonModule } from '@angular/material/button';
import {AccordionComponent} from "../shared/accordion/accordion.component";

@NgModule({
  declarations: [
    MainTopBlockComponent,
    ProfileBlockComponent,
    ForWhomBlockComponent,
    WhyWeComponent,
    MenuBlockComponent,
    SingleMenuBlockComponent,
    CommentBlockComponent,
  ],
  exports: [
    MainTopBlockComponent,
    ProfileBlockComponent,
    ForWhomBlockComponent,
    WhyWeComponent,
    MenuBlockComponent,
    SingleMenuBlockComponent,
    CommentBlockComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, MatButtonModule, AccordionComponent],
})
export class LandingBlocksModule {}
