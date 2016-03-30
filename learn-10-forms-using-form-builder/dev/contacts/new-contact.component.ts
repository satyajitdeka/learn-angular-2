import {Component, OnInit} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Router, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

@Component({
    template: `
    <form [ngFormModel]="myFormName" (ngSubmit)="onSubmit(myFormName.value)">
        <div>
            <label for="f-name">Name</label>
            <input type="text" id="f-name"
                [ngFormControl]="myFormName.controls['name']"
            >
            <span *ngIf="!myFormName.controls['name'].valid">Not valid</span>
        </div>
        <div>
            <label for="f-address">Address</label>
            <input type="text" id="f-address"
                [ngFormControl]="myFormName.controls['address']"
            >
        </div>
        <div>
            <label for="f-phone">Phone</label>
            <input type="text" for="f-phone"
                [ngFormControl]="myFormName.controls['phone']"
            >
        </div>
        <button type="submit" [disabled]="!myFormName.valid">Create Contact</button>
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
    myFormName: ControlGroup;

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder) {}

    onSubmit(formData) {
        this._contactService.insertContact(formData);
        /*
            Or we can use this
            this._contactService.insertContact(this.myFormName.value);
        */
        this._router.navigate(['ListContactLink']);
    }

    ngOnInit(): any {
        this.myFormName = this._formBuilder.group({
            'name': [this._routeParams.get('name'), Validators.required],
            'address': ['', Validators.required],
            'phone': ['', Validators.required]
        });
    }
}
