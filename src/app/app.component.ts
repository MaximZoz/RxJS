import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
// import {} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub: Subscription; /* сюда мы складываем результаты работы метода subscribe */

  constructor() {
    const intervalStream$ = interval(1000);
    // intervalStream$ - переменная с реактивностью (стримом от RxJS)
    this.sub = intervalStream$.subscribe((value) => {
      /* сдесь мы подписываемся */
      console.log(value); /* 1.2.3.4.5.6 каждую сек новое значение */
    });
  }

  stop() {
    this.sub.unsubscribe(); /* сдесь мы отписываемся */
  }
}
