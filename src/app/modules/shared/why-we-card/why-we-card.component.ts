import { Component, Input } from '@angular/core';
import { WhyWeCardInterface } from "./interface/why-we-card.interface";

@Component({
  selector: 'app-why-we-card',
  templateUrl: './why-we-card.component.html',
  styleUrls: ['./why-we-card.component.scss']
})
export class WhyWeCardComponent {
  @Input() whyWeCardData: WhyWeCardInterface | undefined;
}
