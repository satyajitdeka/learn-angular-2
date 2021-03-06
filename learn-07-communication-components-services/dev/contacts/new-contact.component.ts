import {Component} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Route, Router} from "angular2/router";

@Component({
    template: `
    <div>
        <label>Name</label>
        <input type="text" #name>
    </div>
    <div>
        <label>Address</label>
        <input type="text" #address>
    </div>
    <div>
        <label>Phone</label>
        <input type="text" #phone>
    </div>
    <button (click)="addContact(name.value, address.value, phone.value)">Create Contact</button>
    `,
    providers: [ContactService],
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

export class NewContactDetailComponent {
    constructor(private _contactService: ContactService, private _router: Router) {}

    addContact(name, address, phone) {
        let contact: Contact = {name: name, address: address, phone: phone};
        this._contactService.insertContact(contact);
        this._router.navigate(['ListContactLink']);
    }
}
