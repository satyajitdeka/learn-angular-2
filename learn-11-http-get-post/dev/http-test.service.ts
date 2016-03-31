import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()
export class HTTPTestService {
    constructor(private _http: Http) {}

    getDataService() {
        return this._http.get('http://jsonplaceholder.typicode.com/posts/1')
            .map(res => res.json());
    }

    postDataService() {
        var params = JSON.stringify({title: 'foo', body: 'bar', userId: 1});
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post('http://jsonplaceholder.typicode.com/posts', params, {headers: headers})
            .map(res => res.json());
    }
}