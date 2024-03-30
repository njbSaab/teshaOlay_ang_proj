import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {chatId} from "../consts";

@Injectable({
  providedIn: 'root',
})

export class TelegramFormBotService {
  private botToken = '6508132109:AAGPMx2dS0-plEW_eTYRaievq6BIZ6czqC4';

  // private myChatId = '5075411916'
  // private chatIdVakulenkoVasyl = '664645421';
  // private chatIdSeredaOlga = '5135402412';
  // private chatIdVakulenkoYuliia = '125606045';
  // private chatIds = [this.myChatId, this.chatIdVakulenkoVasyl, this.chatIdSeredaOlga, this.chatIdVakulenkoYuliia];
  private chatIds = chatId;


  constructor(private httpService: HttpClient) {
  }
    public sendForm(formData: string) {
      this.chatIds.forEach((chat) =>{
        this.httpService
          .get(
            `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${chat.numberId}&parse_mode=html&text=${formData}`,
          )
          .subscribe();
      })
    }
}

