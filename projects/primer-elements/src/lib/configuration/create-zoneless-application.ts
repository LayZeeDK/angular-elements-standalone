import { ApplicationRef } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';

import { provideNoopNgZone } from './provide-noop-ng-zone';

export function createZonelessApplication(): Promise<ApplicationRef> {
  return createApplication({
    providers: [provideNoopNgZone()],
  });
}
