import { Injectable } from '@angular/core';
import { MetrikaService } from './metrika.service';

@Injectable()
export class RealMetrikaService extends MetrikaService {
  init(counterId: number): void {
    console.log('Real metrika initialized', counterId);
  }

  reachGoal(goal: string): void {
    console.log('Real goal sent', goal);
  }
}
