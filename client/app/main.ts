import { bootstrap }    from '@angular/platform-browser-dynamic'
import { AppComponent } from './app.component'
import { disableDeprecatedForms, provideForms } from '@angular/forms'

import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ 
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
 ])
 .catch((err: any) => console.error(err))
