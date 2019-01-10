import { Component, OnInit } from '@angular/core';
import { randomStringAfter } from 'src/app/utils';

@Component({
  selector: 'app-defensive-drop',
  templateUrl: './defensive-drop.component.html',
  styleUrls: ['./defensive-drop.component.scss']
})
export class DefensiveDropComponent implements OnInit {
  isWorking = false;
  value = null;

  constructor() {}

  ngOnInit() {}

  async doAsync() {
    this.isWorking = true;
    const value = await randomStringAfter(1000);
    this.isWorking = false;
    this.value = value;
  }
}
