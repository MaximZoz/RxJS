import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

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
    this.sub = intervalStream$
      .pipe(
        switchMap((value) => interval(500)),
        filter(
          (value) => value % 2 === 0
        ) /* отдам тольк оте значения, которые кратно делятся на 2 */,
        map(
          (value) => `mapped value ${value}`
        ) /* на каждой итерации мы преобразовываем строчку и добавляем значение mapped value*/
      ) /* метод позволяет применять некоторое кол-во операторов для данного стрима */
      .subscribe((value) => {
        /* сдесь мы подписываемся */
        console.log(value); /* 1.2.3.4.5.6 каждую сек новое значение */
      });
  }

  stop() {
    this.sub.unsubscribe(); /* сдесь мы отписываемся */
  }
}
