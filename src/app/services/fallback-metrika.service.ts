import { Injectable } from '@angular/core';
import { MetrikaService } from './metrika.service';

@Injectable()
export class FallbackMetrikaService extends MetrikaService {
  init(counterId?: number): void {
    console.log('FallbackMetrikaService init called', counterId);
  }

  reachGoal(goal?: string): void {
    console.log('FallbackMetrikaService reachGoal called', goal);
  }
}
