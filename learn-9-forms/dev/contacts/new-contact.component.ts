import {Component, OnInit} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Route, Router, RouteParams} from "angular2/router";

@Component({
    template: `
    <form #myFormName="ngForm" (ngSubmit)="onSubmit()">
        <div>
            <label for="f-name">Name</label>
            <input type="text" id="f-name"
                ngControl="name"
                [(ngModel)]="newContact.name"
                required
                #name="ngForm"
            >
            <span *ngIf="!name.valid">Not valid</span>
        </div>
        <div>
            <label for="f-address">Address</label>
            <input type="text" id="f-address"
                 ngControl="address"
                [(ngModel)]="newContact.address"
                required
            >
        </div>
        <div>
            <label for="f-phone">Phone</label>
            <input type="text" for="f-phone"
                 ngControl="phone"
                [(ngModel)]="newContact.phone"
                required
            >
        </div>
        <button type="submit" [disabled]="!myFormName.form.valid">Create Contact</button>
    </form>
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
        .ng-invalid {
            border: 1px solid red;
        }
    `]
})

export class NewContactDetailComponent implements OnInit {
    newContact: Contact;

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}

    onSubmit() {
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['ListContactLink']);
    }

    ngOnInit(): any {
        this.newContact = {name: this._routeParams.get('name'), address: "", phone: ""};
    }
}
