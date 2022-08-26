import {
  createCustomElement,
  NgElement,
  NgElementConstructor,
  WithProperties,
} from '@angular/elements';
import { createApplication } from '@angular/platform-browser';

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

createApplication().then((application) => {
  PrimerButtonElement = createCustomElement(PrimerButtonComponent, {
    injector: application.injector,
  });
  customElements.define(primerButtonTagName, PrimerButtonElement);
});
