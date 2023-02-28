import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
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

  items2 = [
    { title: 'Item 4', description: 'This is item 4.' },
    { title: 'Item 5', description: 'This is item 5.' },
    { title: 'Item 6', description: 'This is item 6.' },
  ];

  constructor() {}

  ngOnInit() {}

  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Move the item within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Remove the item from the original list and add it to the new list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
