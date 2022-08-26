import { ClassProvider, NgZone, ɵNoopNgZone } from '@angular/core';

export const provideNoopNgZone = (): ClassProvider => ({
  provide: NgZone,
  useClass: ɵNoopNgZone,
});
