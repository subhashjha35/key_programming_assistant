import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { KeyReplacementService } from './key-replacement.service';

describe('KeyReplacementService', () => {
  let service: KeyReplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyReplacementService]
    });
    service = TestBed.inject(KeyReplacementService);
  });

  it('should invalidate device after 5 time units', async () => {

      const result = await firstValueFrom(service.invalidateDevice());
      expect(result).toEqual(true);
  });

  it('should program device after 3 seconds', async () => {
    const result = await firstValueFrom(service.programDevice());
      expect(result).toEqual(true);
  });
});
