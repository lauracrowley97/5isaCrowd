import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'In the Streets', content: 'abstract of the project',
      image: 'assets/bg00.jpg'},
    'addImage': {title: 'add image', subtitle: 'add new street art',
      content: 'have you found new street art? Share it', image: 'assets/bg01.jpg'}
  }

  constructor() { }
}
