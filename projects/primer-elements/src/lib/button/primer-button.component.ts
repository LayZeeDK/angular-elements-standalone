import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { PrimerButtonSize } from './primer-button-size';
import { PrimerButtonVariant } from './primer-button-variant';

type PrimerButtonSizeClass = 'btn-sm' | 'btn-large';
type PrimerButtonVariantClass = `btn-${Exclude<
  PrimerButtonVariant,
  'default'
>}`;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  exportAs: 'primerButton',
  imports: [],
  selector: 'primer-ng-button',
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<button><slot></slot></button>`,
})
export class PrimerButtonComponent {
  get #sizeClass(): PrimerButtonSizeClass | null {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'large':
        return 'btn-large';
      case 'medium':
      // Fall through
      default:
        return null;
    }
  }
  get #variantClass(): PrimerButtonVariantClass | null {
    return this.variant === 'default' ? null : `btn-${this.variant}`;
  }

  @Input()
  size: PrimerButtonSize = 'medium';
  @Input()
  variant: PrimerButtonVariant = 'default';

  @HostBinding('class.btn')
  protected get _baseClassAdded(): true {
    return true;
  }
  @HostBinding('className')
  protected get _className(): string {
    return [this.#sizeClass, this.#variantClass]
      .filter((className) => className !== null)
      .join('');
  }
}
