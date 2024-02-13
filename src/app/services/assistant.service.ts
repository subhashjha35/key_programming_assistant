import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { AssistantHelper } from '../helpers/assistant.helper';
import { AssistantPageData } from '../types/assistant';

@Injectable({providedIn: 'root'})
export class AssistantService {
  fetchAllAssistantData = (): Observable<Array<AssistantPageData>> => {
    return timer(2000).pipe(map(() => AssistantHelper.getAllAssistantFeatures()))
  }
}
