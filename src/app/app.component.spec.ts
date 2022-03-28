import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let mockRouter: any;
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
    authenticationService = jasmine.createSpyObj(AuthenticationService.name, ["activeUserValue","login", "logout"], ["activeUser"]);
    component = new AppComponent(mockRouter, authenticationService);
    var users = of(new User());
    
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('logout calls authentication service', () => {
    component.logout();
    expect(authenticationService.logout).toHaveBeenCalled();
  });
});
