import {Component} from 'angular2/core';
import {ContactDetailComponent} from './contact-detail.component';

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
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent {
    public myContact = [
                        {name: "Satyajit Deka", addres: "Guwahati", phone: "123456789"},
                        {name: "Ramesh Pathak", addres: "Mumbai", phone: "854796213"},
                        {name: "Suresh Dev", addres: "Bihar", phone: "325469871"}
                       ];
    
    public selectedContact = {};
    
    show(data) {
        this.selectedContact = data;
    }
}
