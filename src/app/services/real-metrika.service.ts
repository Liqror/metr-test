import { Inject, Injectable } from '@angular/core';
import { MetrikaService } from './metrika.service';
import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => window,
});

type YandexWindow = Window & {
  ym?: (...args: any[]) => void;
};

@Injectable()
export class RealMetrikaService extends MetrikaService {
  //   init(counterId: number): void {
  //     console.log('Real metrika initialized', counterId);
  //   }

  //   reachGoal(goal: string): void {
  //     console.log('Real goal sent', goal);
  //   }

  private initialized = false;
  private countId!: number;

  //   constructor(@Inject(WINDOW) private win: Window) {
  //     super();
  //   }

  init(counterId: number) {
    if (this.initialized) return;
    const windowRef = window as any;
    this.countId = counterId;

    // const windowRef = this.win as YandexWindow;

    const script = windowRef.document.createElement('script');
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`;
    script.async = true;
    windowRef.document.head.appendChild(script);

    windowRef.ym =
      windowRef.ym ||
      function (...args: any[]) {
        (windowRef.ym as any).a = (windowRef.ym as any).a || [];
        (windowRef.ym as any).a.push(args);
      };

    windowRef.ym(counterId, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });

    this.initialized = true;
  }

  reachGoal(goal: string) {
    // const windowRef = this.win as YandexWindow;
    console.log(this.countId, 'reachGoal', goal);
    (window as any).ym?.(this.countId, 'reachGoal', goal);
  }
}
