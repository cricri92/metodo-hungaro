import { Component, Output, EventEmitter } from '@angular/core'

import { MatrizComponent } from './components/matriz.component'

@Component({
    selector: "metodo-hungaro-app",
    templateUrl: "app/views/main-view.component.html",
    directives: [
        MatrizComponent
    ]
})
export class AppComponent {
      

}