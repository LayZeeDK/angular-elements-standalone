import { enableProdMode } from '@angular/core';
import {
  primerButtonTagName,
  registerPrimerButtonElement,
} from 'primer-elements';
import { bootstrapZonelessApplication } from './app/configuration/bootstrap-zoneless-application';
// import { createZonelessApplication } from './app/configuration/create-zoneless-application';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// createZonelessApplication()
bootstrapZonelessApplication()
  .then((application) => registerPrimerButtonElement(application))
  .then(() => console.log(`Registered <${primerButtonTagName}> element`))
  .catch((error) => console.error(error));
