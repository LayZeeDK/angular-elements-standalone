import { enableProdMode } from '@angular/core';
import 'primer-elements';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
