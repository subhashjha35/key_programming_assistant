import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { AssistantEffects, AssistantReducers } from './store/assistant';
import { KeyReplacementEffects, KeyReplacementReducers } from './store/key-replacement';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync('animations'),
    provideStore(),
    provideState({ name: KeyReplacementReducers.keyReplacementFeatureKey, reducer: KeyReplacementReducers.reducer }),
    provideState({ name: AssistantReducers.AssistantFeatureKey, reducer: AssistantReducers.reducer }),
    provideEffects(KeyReplacementEffects.KeyReplacementEffects, AssistantEffects.AssistantEffects),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ],
};
