import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Injectable({providedIn: 'root'})
export class KeyReplacementService {
  invalidateDevice = (): Observable<boolean> => {
    return timer(5000).pipe(map(() => true))
  }

  programDevice = (): Observable<boolean> => {
    return timer(3000).pipe(map(() => true));
  }
}
