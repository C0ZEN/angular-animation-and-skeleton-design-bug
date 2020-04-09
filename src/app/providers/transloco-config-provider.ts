import { ValueProvider } from '@angular/core';
import {
  TranslocoConfig,
  TRANSLOCO_CONFIG
} from '@ngneat/transloco';

export const TRANSLOCO_CONFIG_PROVIDER: ValueProvider = {
  provide: TRANSLOCO_CONFIG,
  useValue: <TranslocoConfig>{
    availableLangs: [
      'en'
    ],
    defaultLang: 'en',
    failedRetries: 1,
    fallbackLang: 'en',
    flatten: {
      aot: false
    },
    missingHandler: {
      allowEmpty: false,
      logMissingKey: true,
      useFallbackTranslation: false
    },
    prodMode: false,
    reRenderOnLangChange: true
  }
};
