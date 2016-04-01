import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {NewContactDetailComponent} from "./contacts/new-contact.component";

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav>
            <a [routerLink]="['ListContactLink']">List Contacts</a>
            <a [routerLink]="['NewContactLink']">New Contact</a>
        </nav>
    </header>

    <div class="main">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/list-contacts', name: 'ListContactLink', component: ContactListComponent, useAsDefault: true},
    {path: '/new-contact', name: 'NewContactLink', component: NewContactDetailComponent}

    /*
        This is another way to pass params
        {path: '/new-contact/:name', name: 'NewContactFromContactLink', component: NewContactDetailComponent}
     */
])

export class AppComponent {

}