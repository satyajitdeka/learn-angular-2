import {Injectable} from "angular2/core";
import {CONTACTS} from "./data-contacts";
@Injectable()
export class ContactService {
    getContacts() {
        return Promise.resolve(CONTACTS);
    }
}