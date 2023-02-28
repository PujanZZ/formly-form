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
  items: { title: string; description: string }[] = [
    { title: 'Item 1', description: 'This is item 1.' },
    { title: 'Item 2', description: 'This is item 2.' },
    { title: 'Item 3', description: 'This is item 3.' },
  ];

  items2 = [{ title: 'Item 4', description: 'This is item 4.' }];

  constructor() {}

  ngOnInit() {}

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // Move item within the same array
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move item between arrays
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
