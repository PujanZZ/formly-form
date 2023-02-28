import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css'],
})
export class DragdropComponent implements OnInit {
  items = [
    { title: 'Item 1', description: 'This is item 1.' },
    { title: 'Item 2', description: 'This is item 2.' },
    { title: 'Item 3', description: 'This is item 3.' },
  ];

  items2 = [];

  constructor() {}

  ngOnInit() {}

  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      const item = event.previousContainer.data[event.previousIndex];
      event.previousContainer.data.splice(event.previousIndex, 1);
      event.container.data.splice(event.currentIndex, 0, item);
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
