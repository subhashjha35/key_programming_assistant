import { TestBed } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from "@ngrx/store/testing";
import { Observable, firstValueFrom, of } from "rxjs";
import { AssistantActions } from ".";
import { AssistantService } from "../../services/assistant.service";
import { AssistantEffects } from "./assistant.effects";

describe('AssistantEffects', () => {
  let serviceSpy: jasmine.SpyObj<AssistantService>;

  let actions$: Observable<any>;
  let effects: AssistantEffects;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj<AssistantService>(
      ['fetchAllAssistantData'],
    );

    TestBed.configureTestingModule({
      providers: [
        AssistantEffects,
        provideMockActions(() => actions$),
        provideMockStore({

        }),
        { provide: AssistantService, useValue: serviceSpy },
      ],
    });
    effects = TestBed.inject(AssistantEffects);
  });

  it('should fetch Assistant Data', async () => {
    actions$ = of(AssistantActions.fetchAssistantData());

    serviceSpy.fetchAllAssistantData.and.returnValue(of([]));
    const action = await firstValueFrom(effects.fetchAssistantData$);

    expect(action).toEqual(AssistantActions.fetchAssistantDataSuccess({ data: [] }));
    expect(serviceSpy.fetchAllAssistantData).toHaveBeenCalledWith();
  });
})
