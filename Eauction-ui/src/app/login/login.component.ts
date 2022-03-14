import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    userLogin!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        let activeUser = this.authenticationService.activeUserValue;
        if (activeUser) {
            if(activeUser.username === 'buyer')
            {
                this.router.navigate(['/buyer']);
            }
            if(activeUser.username === 'seller')
            {
                this.router.navigate(['/seller']);
            }
        }
    }

    ngOnInit() {
        this.userLogin = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/seller';
    }

    // convenience getter for easy access to form fields
    get formControls() { return this.userLogin.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userLogin.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.formControls['username'].value, this.formControls['password'].value)
            .pipe(first())
            .subscribe(x => {
                this.router.navigate(['/seller']);
            });
    }
}
