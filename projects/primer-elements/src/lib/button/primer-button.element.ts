import {
  createCustomElement,
  NgElement,
  NgElementConstructor,
  WithProperties,
} from '@angular/elements';

import { whenZonelessApplication } from '../configuration/when-zoneless-application';
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

async function registerPrimerButtonElement(): Promise<void> {
  const application = await whenZonelessApplication;

  PrimerButtonElement = createCustomElement(PrimerButtonComponent, {
    injector: application.injector,
  });
  customElements.define(primerButtonTagName, PrimerButtonElement);
}

export const primerButtonTagName = 'primer-button';
export let PrimerButtonElement: NgElementConstructor<PrimerButtonElementProperties>;

registerPrimerButtonElement();
