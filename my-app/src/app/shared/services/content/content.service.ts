import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'In the Streets', content: '' +
        'Have you seen street art in the streets?',
      image: 'assets/bg00.jpg'}
  }

  constructor() { }
}
