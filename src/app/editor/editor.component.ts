import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  checker = {
    name: '',
    index: -1,
    status: false,
  };
  templates = [
    {
      name: 'Item 1',
      title: '',
      description: '',
      position: 0,
    },
    {
      name: 'Item 2',
      title: '',
      description: '',
      position: 1,
    },
    {
      name: 'Item 3',
      title: '',
      description: '',
      position: 2,
    },
  ];
  defaultTemplates = [];
  droppedItems: any[] = [];
  droppedTemplate: any[] = [];

  constructor() {}

  ngOnInit() {
    this.templateReset();
  }

  onClick(i: number) {
    this.checker.index = i;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // this.droppedItems = event.container.data.map((obj) => ({ ...obj }));
      // console.log(this.droppedItems);
    }
  }

  onDoneListClick(i: number) {
    console.log(i);
    this.checker.index = i;
  }

  templateReset() {
    //setTimeout(() => {
    // this.defaultTemplates = this.templates.map((obj) => ({ ...obj }));
    //}, 0);
    this.defaultTemplates = this.createCopy(this.templates);
  }

  createCopy(orig) {
    return JSON.parse(JSON.stringify(orig));
  }

  dropIt(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      console.log('Hit');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let answerCopy = this.createCopy(
        this.droppedTemplate[event.currentIndex]
      );
      this.droppedTemplate[event.currentIndex] = answerCopy;
      console.log(answerCopy);
      this.droppedTemplate.forEach((answer, i) => {
        answer.position = i;
      });
      this.templateReset();
    } else if (event.previousIndex !== event.currentIndex) {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        this.templateReset();
        //this.resetList();
      }
    }
  }
}
