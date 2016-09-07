import {Component} from '@angular/core';
import {db, baqend} from 'baqend/realtime';

@Component({
    selector: 'app',
    templateUrl: 'app.html'
})
export class App {
    constructor() {}


    get isLoggedIn() {
        return !!db.User.me;
    }
}

