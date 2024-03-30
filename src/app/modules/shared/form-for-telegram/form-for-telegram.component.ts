import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-for-telegram',
  templateUrl: './form-for-telegram.component.html',
  styleUrls: ['./form-for-telegram.component.scss'],
})
export class FormForTelegramComponent {
  public nameControl = new FormControl();
  public orderControl = new FormControl();

  constructor(private http: HttpClient) {}

  private botToken = '5888586424:AAGp06FzYCylNjUGgwJhDbRxxaQlMa-vfjs';
  private chatId = '5075411916';

  public sendForm() {
    let name = this.nameControl.value;
    this.http
      .get(
        `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${name}`
      )
      .subscribe();
  }
}
