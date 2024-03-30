import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AfterPopupWindowComponent} from '../after-popup-window/after-popup-window.component';
import {FormBuilder, Validators} from '@angular/forms';
import {TelegramFormBotService} from '../services/telegram-form-bot';


@Component({
  selector: 'app-popup-main-block',
  templateUrl: './popup-main-block.component.html',
  styleUrls: ['./popup-main-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupMainBlockComponent {
  public form = this.formBuilder.group({
    name: ['', Validators.required],
    surname: [''],
    phone: ['', Validators.required],
    question: [[''], Validators.required],
  })
  constructor(
    public dialogRef: MatDialogRef<PopupMainBlockComponent>,
    private afterPopupDialog: MatDialog,
    private formBuilder: FormBuilder,
    private telegramFormBotService: TelegramFormBotService,

    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
    if(this.data){
      this.form.patchValue(
        {
          question: [data],
        }
      )
    }
  }

  afterSubmitPopup() {
    this.form.markAllAsTouched();


    if (this.form.invalid) {
      return;

    }


    const formValue = this.form.value;
    const formattingText = `
    Нове запитання: %0A
    Имя: ${formValue.name}%0A
    Фамилия: ${formValue.surname}%0A
    Telephone: ${formValue.phone}%0A
    ЗАПИТАННЯ: ${formValue.question}%0A
  `;

    this.telegramFormBotService.sendForm(formattingText);
    this.dialogRef.close();
    this.afterPopupDialog.open(AfterPopupWindowComponent, {
      enterAnimationDuration: '700ms',
    });
  }


}
