import {Component} from 'angular2/core';

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
    public contact = {};
}
