import { ApplicationRef } from '@angular/core';
import {
  createCustomElement,
  NgElement,
  NgElementConstructor,
  WithProperties,
} from '@angular/elements';

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

export function registerPrimerButtonElement(
  application: ApplicationRef
): NgElementConstructor<PrimerButtonElementProperties> {
  const PrimerButtonElement: NgElementConstructor<PrimerButtonElementProperties> =
    createCustomElement(PrimerButtonComponent, {
      injector: application.injector,
    });
  customElements.define(primerButtonTagName, PrimerButtonElement);

  return PrimerButtonElement;
}

export const primerButtonTagName = 'primer-button';
