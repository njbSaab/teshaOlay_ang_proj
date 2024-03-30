import {Component, Input} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {AccordionInterface} from "../interfaces/accordion.interface";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports:[MatExpansionModule]
})

export class AccordionComponent {

  @Input()AccordionItem: AccordionInterface | undefined
  panelOpenState = true;
}
