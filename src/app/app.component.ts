import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub: Subscription; /* сюда мы складываем результаты работы метода subscribe */

  constructor() {
    const stream$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);
      setTimeout(() => {
        observer.complete();
      }, 2100);
      setTimeout(() => {
        observer.error('Что-то не так');
      }, 2000);
      setTimeout(() => {
        observer.next(2);
      }, 2500);
    });
    this.sub = stream$.subscribe(
      (value) => console.log('next:', value),
      (error) => console.log('error:', error),
      () => console.log('complete  ')
    );
  }
  stop() {
    this.sub.unsubscribe(); /* сдесь мы отписываемся */
  }
}
