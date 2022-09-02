import { enableProdMode } from '@angular/core';
import {
  primerButtonTagName,
  registerPrimerButtonElement,
} from 'primer-elements';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

registerPrimerButtonElement()
  .then(() => console.log(`Registered <${primerButtonTagName}> element`))
  .catch((error) => console.error(error));
