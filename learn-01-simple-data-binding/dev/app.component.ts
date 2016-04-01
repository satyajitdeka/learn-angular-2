import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `

    <h3>{{myContact.name}}</h3>
    <input [(ngModel)]="myContact.name" type="text">

    <h3 (click)="showAll()" [class.clicked]="showDetails">Click here</h3>

    <div *ngIf="showDetails">
		{{myContact.addres}} <br>
		{{myContact.phone}}
    </div>

    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public myContact = {name: "Satyajit Deka", addres: "Guwahati", phone: "123456789"};
    
    public showDetails = false;
    
    showAll() {
        this.showDetails = true;
    }
}
