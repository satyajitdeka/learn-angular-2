import {Component} from 'angular2/core';
import {HttpTestComponent} from "./http-test.component";

@Component({
    selector: 'my-app',
    template: `
    <div class="main">
        <http-test></http-test>
    </div>
    `,
    directives: [HttpTestComponent]
})

export class AppComponent {

}