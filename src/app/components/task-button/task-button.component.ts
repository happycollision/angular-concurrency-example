import { Component, OnInit } from '@angular/core';
import { createTask } from 'angular-concurrency';
import { randomStringAfter } from 'src/app/utils';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss']
})
export class TaskButtonComponent implements OnInit {
  doAsync = createTask(this, function*() {
    return yield randomStringAfter(1000);
  }).setSchedule('drop');

  constructor() {}

  ngOnInit() {}
}
