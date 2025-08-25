import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {HomeDialogDemo} from './home-dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Button } from "primeng/button";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [DialogService, provideAnimations(), MessageService]
})
export class Home {
  ref: DynamicDialogRef | undefined;

  constructor(private readonly dialogService: DialogService) {}

  openDialog() {
    this.ref = this.dialogService.open(HomeDialogDemo, {
      width: '20%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      style:{
        bottom: '300px',
        left: '400px',
        position: 'fixed'
      }
    });
  }
  closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }
  openSurvey() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfLHJ1X5sBLVZTEk3-6PMNNa_oR_-jVa91buPJlP0CReYCYRQ/viewform?usp=dialog', '_blank');
  }
}
