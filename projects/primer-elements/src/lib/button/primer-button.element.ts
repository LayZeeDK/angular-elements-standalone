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

declare global {
  interface HTMLElementTagNameMap {
    [primerButtonTagName]: PrimerButtonElement;
  }
}

export type PrimerButtonElement = NgElement &
  WithProperties<PrimerButtonElementProperties>;
export interface PrimerButtonElementProperties {
  size: PrimerButtonSize;
  variant: PrimerButtonVariant;
}

function createPrimerButtonElementConstructor(
  application: ApplicationRef
): NgElementConstructor<PrimerButtonElementProperties> {
  return createCustomElement(PrimerButtonComponent, {
    injector: application.injector,
  });
}

export function registerPrimerButtonElement(application: ApplicationRef): void {
  const PrimerButtonElement = createPrimerButtonElementConstructor(application);
  customElements.define(primerButtonTagName, PrimerButtonElement);
}

export const primerButtonTagName = 'primer-button';
