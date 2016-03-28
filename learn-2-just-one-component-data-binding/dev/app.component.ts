import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <div>Click any of the name</div>
    <ul>
        <li *ngFor="#contact of myContact" (click)="show(contact)" [class.clicked]="selectedContact === contact">{{contact.name}}</li>
    </ul>
    
    <input [(ngModel)]="selectedContact.name" type="text">
    
    <div>
        {{selectedContact.name}} <br>
        {{selectedContact.addres}} <br>
        {{selectedContact.phone}}
    </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
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