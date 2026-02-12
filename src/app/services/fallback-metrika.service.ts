import { Injectable } from '@angular/core';
import { MetrikaService } from './metrika.service';

@Injectable()
export class FallbackMetrikaService extends MetrikaService {
  init() {
    console.log('⚠ Metrika disabled');
  }

  reachGoal(goal: string) {
    console.log('⚠ Goal skipped (metrika disabled):', goal);
  }
}
