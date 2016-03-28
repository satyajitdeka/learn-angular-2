import {Component} from 'angular2/core';

@Component({
    selector: 'contact-detail',
    template: `
    <input [(ngModel)]="contact.name" type="text">
    
    <div>
        {{contact.name}} <br>
        {{contact.addres}} <br>
        {{contact.phone}}
    </div>
    `,
    inputs: ["contact"]
})
export class ContactDetailComponent {
    public contact = {};
}
