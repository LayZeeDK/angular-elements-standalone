import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
})
export class NoopAppModule implements DoBootstrap {
  ngDoBootstrap(): void {
    // No-op
  }
}

export const whenZonelessBootstrap = platformBrowser()
  .bootstrapModule(NoopAppModule, {
    ngZone: 'noop',
  })
  .then((ngModule) => ngModule.injector.get(ApplicationRef));
