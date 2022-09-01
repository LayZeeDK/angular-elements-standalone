// import 'zone.js';
import { enableProdMode } from '@angular/core';
import {
  registerPrimerButtonElement,
  primerButtonTagName,
} from 'primer-elements';
import { environment } from './environments/environment';
import { whenZonelessBootstrap } from './app/configuration/when-zoneless-bootstrap';
// import { whenZonelessApplication } from './app/configuration/when-zoneless-application';

if (environment.production) {
  enableProdMode();
}

// whenZonelessApplication;
whenZonelessBootstrap
  .then((application) => registerPrimerButtonElement(application))
  .then((PrimerButtonElement) =>
    console.log(
      `Registered PrimerButtonElement as <${primerButtonTagName}></${primerButtonTagName}>`,
      PrimerButtonElement
    )
  )
  .catch((error) => console.error(error));
