import {
  createCustomElement,
  NgElement,
  NgElementConstructor,
  WithProperties,
} from '@angular/elements';
import { createApplication } from '@angular/platform-browser';

// import { provideNoopNgZone } from '../configuration/provide-noop-ng-zone';
import { PrimerButtonSize } from './primer-button-size';
import { PrimerButtonVariant } from './primer-button-variant';
import { PrimerButtonComponent } from './primer-button.component';

export interface PrimerButtonElementProperties {
  size: PrimerButtonSize;
  variant: PrimerButtonVariant;
}

declare global {
  interface HTMLElementTagNameMap {
    [primerButtonTagName]: NgElement &
      WithProperties<PrimerButtonElementProperties>;
  }
}

export const primerButtonTagName = 'primer-button';
export let PrimerButtonElement: NgElementConstructor<PrimerButtonElementProperties>;

createApplication({
  providers: [
    // provideNoopNgZone(),
  ],
}).then((application) => {
  PrimerButtonElement = createCustomElement(PrimerButtonComponent, {
    injector: application.injector,
  });
  customElements.define(primerButtonTagName, PrimerButtonElement);
});
