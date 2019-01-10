import { Component, OnInit, OnDestroy } from '@angular/core';
import { randomStringAfter } from 'src/app/utils';

@Component({
  selector: 'app-defensive-destroy',
  templateUrl: './defensive-destroy.component.html',
  styleUrls: ['./defensive-destroy.component.scss']
})
export class DefensiveDestroyComponent implements OnInit, OnDestroy {
  isWorking = false;
  value = null;
  isNotDestroyed = true;

  constructor() {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.isNotDestroyed = false;
  }

  async doAsync() {
    this.isWorking = true;
    const value = await randomStringAfter(1000);
    this.isWorking = false;
    if (this.isNotDestroyed) {
      this.value = value;
    }
  }
}
