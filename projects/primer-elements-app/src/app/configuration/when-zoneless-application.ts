import { createApplication } from '@angular/platform-browser';

import { provideNoopNgZone } from './provide-noop-ng-zone';

export const whenZonelessApplication = createApplication({
  providers: [provideNoopNgZone()],
});
