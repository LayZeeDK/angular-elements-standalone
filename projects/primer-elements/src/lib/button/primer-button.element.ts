import type { NgElementConstructor, WithProperties } from '@angular/elements';
import { createCustomElement, NgElement } from '@angular/elements';

import { whenApplication } from '../configuration/when-application';
import { PrimerButtonSize } from './primer-button-size';
import { PrimerButtonVariant } from './primer-button-variant';
import { PrimerButtonComponent } from './primer-button.component';

declare global {
  interface HTMLElementTagNameMap {
    [primerButtonTagName]: PrimerButtonElement;
  }
}

export type PrimerButtonElement = NgElement &
  WithProperties<PrimerButtonElementProperties> & {
    getAttribute(qualifiedName: 'size'): PrimerButtonSize | null;
    getAttribute(qualifiedName: 'variant'): PrimerButtonVariant | null;
    getAttribute(qualifiedName: string): string | null;

    setAttribute(qualifiedName: 'size', value: PrimerButtonSize): void;
    setAttribute(qualifiedName: 'variant', value: PrimerButtonVariant): void;
    setAttribute(qualifiedName: string, value: string): void;
  };
export interface PrimerButtonElementProperties {
  size: PrimerButtonSize;
  variant: PrimerButtonVariant;
}

export async function registerPrimerButtonElement(): Promise<void> {
  const application = await whenApplication;
  const PrimerButtonElement: NgElementConstructor<PrimerButtonElementProperties> =
    createCustomElement(PrimerButtonComponent, {
      injector: application.injector,
    });
  customElements.define(primerButtonTagName, PrimerButtonElement);
}

export const primerButtonTagName = 'primer-button';
