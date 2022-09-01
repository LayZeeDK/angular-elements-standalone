import { enableProdMode } from '@angular/core';
import {
  registerPrimerButtonElement,
  primerButtonTagName,
} from 'primer-elements';
import { environment } from './environments/environment';
import { bootstrapZonelessApplication } from './app/configuration/bootstrap-zoneless-application';
// import { createZonelessApplication } from './app/configuration/create-zoneless-application';

if (environment.production) {
  enableProdMode();
}

// createZonelessApplication()
bootstrapZonelessApplication()
  .then((application) => registerPrimerButtonElement(application))
  .then((PrimerButtonElement) =>
    console.log(
      `Registered PrimerButtonElement as <${primerButtonTagName}></${primerButtonTagName}>`,
      PrimerButtonElement
    )
  )
  .catch((error) => console.error(error));
