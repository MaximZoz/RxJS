import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub: Subscription; /* сюда мы складываем результаты работы метода subscribe */
  stream$: Subject<number> = new Subject<
    number /* стрим состоит из пустых типов данных */
  >(); /* будем эмитить метод void - не будем передавать никакие данные */
  counter = 0;
  constructor() {
    this.sub = this.stream$.subscribe((value) => {
      console.log('subscribe', value);
    });
  }
  stop() {
    this.sub.unsubscribe(); /* сдесь мы отписываемся */
  }
  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }
}
