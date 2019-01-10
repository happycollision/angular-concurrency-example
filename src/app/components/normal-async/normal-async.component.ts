import { Component, OnInit } from '@angular/core';
import { randomStringAfter } from 'src/app/utils';

@Component({
  selector: 'app-normal-async',
  templateUrl: './normal-async.component.html',
  styleUrls: ['./normal-async.component.scss']
})
export class NormalAsyncComponent implements OnInit {
  value = null;

  constructor() {}

  ngOnInit() {}

  async doAsync() {
    this.value = await randomStringAfter(1000);
  }
}
