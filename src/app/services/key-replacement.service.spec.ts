import { TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { cold } from 'jasmine-marbles';
import { KeyReplacementService } from './key-replacement.service';

describe('KeyReplacementService', () => {
  let service: KeyReplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyReplacementService, provideAnimationsAsync('noop')]
    });
    service = TestBed.inject(KeyReplacementService);
  });

  it('should invalidate device after 5 seconds', () => {
    const expectedMarble = '-----a 4999ms (b|)';
    const expectedValues = { a: undefined, b: true };

    spyOn(console, 'log'); // Mocking console.log if needed

    const result$ = service.invalidateDevice();
    expect(result$).toBeObservable(cold(expectedMarble, expectedValues));
  });

  it('should program device after 3 seconds', () => {
    const expectedMarble = '----a 2999ms (b|)';
    const expectedValues = { a: undefined, b: true };

    spyOn(console, 'log'); // Mocking console.log if needed

    const result$ = service.programDevice();
    expect(result$).toBeObservable(cold(expectedMarble, expectedValues));
  });
});
