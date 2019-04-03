import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.scss']
})
export class PhoneDirectoryComponent implements OnInit {
  showForm = false;
  buttonHide = false;
  addModel: any = {};
  phoneSubscribers: Subscriber[] = [
    {
      name: 'Aashish',
      contact: '7697358094'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getForm() {
    this.addModel = new Subscriber();
    this.showForm = true;
    this.buttonHide = true;
  }

  hideForm() {
    this.showForm = false;
    this.buttonHide = false;
  }

  addSubcriber() {
    this.phoneSubscribers.push(this.addModel);
    this.hideForm();
  }

  deleteSubscriber(index: number) {
    this.phoneSubscribers.splice(index, 1);
  }

}
