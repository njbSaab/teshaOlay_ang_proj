import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {AccordionInterface} from "../../shared/interfaces/accordion.interface";

@Component({
  selector: 'app-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.scss'],
})
export class ProfileBlockComponent implements OnInit {

  public accordionData: AccordionInterface[] = [
    {
      text: 'Мене звати Ольга Середа. З самого дитинства люблю куховарити.',
      textNext: 'Спочатку спостерігала за мамою, потім вишуковувала сама нові рецепти, щоб здивувати рідних смаколиками. Стараюсь, щоб мої страви були смачними, готувалися без зайвого клопоту та складалися з доступних інгредієнтів.'
    },
  ]
  public accordionDataSecond: AccordionInterface[] = [
    {
      text: 'Кожна нова страва, яку я пропоную підписникам, неодноразово приготована на моїй кухні, перевірена і продегустована рідними.',
      textNext: 'Розумію, як важко молодим домогосподаркам кожен день придумувати меню для сім’ї, і тому, маючи достатню кількість кулінарних відео–рецептів на ютуб каналі, я вирішила підібрати і запропонувати Вам уже розроблені сети з рецептами, описом приготування і прорахуванням часу.'
    }
  ]
  public accordionDataLast: AccordionInterface[] = [
    {
      text: 'Ви лише закуповуєте продукти, витрачаєте певну кількість часу …і смакуєте зі своїми рідними із задоволенням',
      textNext: 'Я буду тішитись, якщо мої поради не тільки наповнять Ваш стіл новими стравами, а й допоможуть Вам мати більше вільного часу, такого цінного в нашому житті!'
    }
  ]

  constructor(private wowService: NgwWowService) {}
  ngOnInit(): void {
    this.wowService.init();
  }
  reset() {
    this.wowService.init();
  }


}
