import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let mockRouter: any;
  let formBuilder: FormBuilder;
  let authenticationService: AuthenticationService;
  const dummyActivateRoute: any = {
    "snapshot": {
      "queryparams": {
        "returnUrl": "/seller"
      }
    }
  };

  beforeEach(async () => {
    formBuilder = new FormBuilder();
    mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
    authenticationService = jasmine.createSpyObj(AuthenticationService.name, ["activeUserValue", "login", "logout"]);
    component = new LoginComponent(formBuilder, dummyActivateRoute, mockRouter, authenticationService);
  });

  beforeEach(() => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
