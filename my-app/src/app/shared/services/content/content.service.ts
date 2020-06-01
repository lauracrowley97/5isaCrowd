import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'In the Streets', content: 'abstract of the project',
      image: 'assets/bg00.jpg'}
  }

  constructor() { }
}
