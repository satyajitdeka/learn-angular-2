import {Component, OnInit} from 'angular2/core';
import {ContactDetailComponent} from './component-detail.component';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {CONTACTS} from "./data-contacts";

@Component({
    selector: 'contact-list',
    template: `
    <div>Click any of the name</div>
    <ul>
        <li *ngFor="#contact of myContact" (click)="show(contact)" [class.clicked]="selectedContact === contact">{{contact.name}}</li>
    </ul>
    <contact-detail [contact]="selectedContact"></contact-detail>
    `,
    directives: [ContactDetailComponent],
    providers: [ContactService],
    styleUrls: ["../src/css/app.css"]
})

export class ContactListComponent implements OnInit{
    public myContact: Contact[];
    
    public selectedContact = {};

    constructor(private _contactService: ContactService){}

    show(data) {
        this.selectedContact = data;
    }

    getContacts(){
        this._contactService.getContacts().then((contacts: Contact[]) => this.myContact = CONTACTS);
    }

    ngOnInit():any{
        this.getContacts();
    }
}
