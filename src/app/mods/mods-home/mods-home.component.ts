import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'What color is the sky?', content: 'The sky is blue.' },
    { title: 'What is the name of your dog?', content: 'My dog is named Connie.' },
    { title: 'Where do you live?', content: 'I live in Austin' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
