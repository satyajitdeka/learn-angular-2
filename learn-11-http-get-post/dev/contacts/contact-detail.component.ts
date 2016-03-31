import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
    selector: 'contact-detail',
    template: `
    <div>
        <label>Name</label>
        <input [(ngModel)]="contact.name" type="text">
    </div>
    <div>
        <label>Address</label>
        <input [(ngModel)]="contact.address" type="text">
    </div>
    <div>
        <label>Phone</label>
        <input [(ngModel)]="contact.phone" type="text">
    </div>
    <button (click)="createNew()">Route name a param</button>
    `,
    inputs: ["contact"],
    styles: [`
        label {
            display: inline-block;
            width: 140px;
        }
        input {
            width: 250px;
        }
    `]
})

export class ContactDetailComponent {
    public contact: Contact = null;

    constructor(private _router: Router) {}
    createNew() {
        this._router.navigate(['NewContactLink', {name: this.contact.name}])

        /*
            This is another way to pass params
            this._router.navigate(['NewContactFromContactLink', {name: this.contact.name}])
        */
    }
}
