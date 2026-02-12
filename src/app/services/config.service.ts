import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  getMetrikaConfig(): Observable<{ counterId: number }> {
    // const isError = true;
    const isError = false;
    return isError
      ? throwError(() => new Error('Backend failed')).pipe(delay(500))
      : of({ counterId: 99999999 }).pipe(delay(500));
  }
}
