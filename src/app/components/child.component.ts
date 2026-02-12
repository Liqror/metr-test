import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Я дочерний компонент</p>`,
})
export class ChildComponent {
  name = 'ChildComponent';
  sayHello() {
    console.log('Привет из ChildComponent');
  }
}
