import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, config, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private activeUserSubject: BehaviorSubject<User>;
    public activeUser: Observable<User>;

    constructor(private http: HttpClient) {
        const userJson = localStorage.getItem('activeUser');
        this.activeUserSubject = new BehaviorSubject(userJson !== null ? JSON.parse(userJson) : new User());
        this.activeUser = this.activeUserSubject.asObservable();
    }

    public get activeUserValue(): User {
        return this.activeUserSubject.value;
    }

    login(username: string, password: string) {
        if(username === "seller")
        {
            let seller = new User();
            seller.username = "seller";
            seller.password = "seller";
            seller.firstName = "seller";
            seller.lastName = "seller";
            localStorage.setItem("activeUser", seller.username);
            return of(seller);
        }

        let buyer = new User();
        buyer.username = "seller";
        buyer.password = "seller";
        buyer.firstName = "seller";
        buyer.lastName = "seller";
        localStorage.setItem("activeUser", buyer.username);

        return of(buyer);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('activeUser');
        this.activeUserSubject.next(new User());
    }
}