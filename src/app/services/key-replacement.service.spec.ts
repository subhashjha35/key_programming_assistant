import { TestBed } from '@angular/core/testing';
import { marbles } from 'rxjs-marbles';
import { KeyReplacementService } from './key-replacement.service';

describe('KeyReplacementService', () => {
  let service: KeyReplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyReplacementService],
    });
    service = TestBed.inject(KeyReplacementService);
  });

  it(
    'should invalidate device after 5 time units',
    marbles(async (m) => {
      const expectedMarble = '5s a|';
      const expectedValue = { a: true };

      const result$ = await service.invalidateDevice();
      m.expect(result$).toBeObservable(m.cold(expectedMarble, expectedValue));
    }),
  );

  it(
    'should program device after 3 seconds',
    marbles(async (m) => {
      const expectedMarble = '3s a|';
      const expectedValue = { a: true };

      const result$ = await service.programDevice();
      m.expect(result$).toBeObservable(m.cold(expectedMarble, expectedValue));
    }),
  );

  it('should get devices', () => {
    expect(service.getDevices()).toEqual(service.devices);
  });
});
