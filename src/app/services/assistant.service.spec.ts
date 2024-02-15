import { TestBed } from '@angular/core/testing';
import { marbles } from 'rxjs-marbles';
import { AssistantHelper } from '../helpers/assistant.helper';
import { AssistantService } from './assistant.service';

describe('AssistantService', () => {
  let service: AssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssistantService],
    });
    service = TestBed.inject(AssistantService);
  });

  it(
    'should fetch assistant data after 1 minute',
    marbles(async (m) => {
      const expectedMarble = '1s a|';
      const expectedValue = { a: AssistantHelper.getAllAssistantFeatures() };

      const result$ = await service.fetchAllAssistantData();
      m.expect(result$).toBeObservable(m.cold(expectedMarble, expectedValue));
    }),
  );
});
