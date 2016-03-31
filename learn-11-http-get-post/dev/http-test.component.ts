import {Component} from 'angular2/core';
import {HTTPTestService} from "./http-test.service";

@Component({
    selector: 'http-test',
    template: `
        <div class="http-wrapper">
            <button (click)="getTestData()">Test Get Request</button>
            <p>{{getData}}</p>
            <button (click)="postTestData()">Test Post Request</button>
            <p>{{postData}}</p>
        </div>
    `,
    providers: [HTTPTestService],
    styleUrls: ["../src/css/contact.css"]
})

export class HttpTestComponent {
    getData: string;
    postData: string;

    constructor(private _httpService: HTTPTestService) {}

    getTestData() {
        this._httpService.getDataService()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            );
    }

    postTestData() {
        this._httpService.postDataService()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            );
    }
}
