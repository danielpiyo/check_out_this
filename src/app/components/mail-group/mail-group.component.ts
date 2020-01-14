import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-group',
  templateUrl: './mail-group.component.html',
  styleUrls: ['./mail-group.component.css']
})
export class MailGroupComponent implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
