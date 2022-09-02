import {
  ApplicationRef,
  DoBootstrap,
  NgModule,
  PlatformRef,
} from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
})
class NoopAppModule implements DoBootstrap {
  ngDoBootstrap(): void {
    // No-op
  }
}

export function bootstrapZonelessApplication(
  browserPlatform: PlatformRef = platformBrowser()
): Promise<ApplicationRef> {
  return browserPlatform
    .bootstrapModule(NoopAppModule, {
      ngZone: 'noop',
    })
    .then((ngModule) => ngModule.injector.get(ApplicationRef));
}
