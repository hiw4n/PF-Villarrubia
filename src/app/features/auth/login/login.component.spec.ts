import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../shared/material/material.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('TEST DE LOGIN -> LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
      imports: [
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    /* form = new LoginComponent(new FormBuilder()); */
  });

  it(' ❤️‍🔥 should create, with all imports modules 😅', () => {
    expect(component).toBeTruthy();
  });

  it(' 💌 Form have form input email', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
  });
  it(' 💌 email is required', () => {
    const control = component.loginForm.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it(' 🔒 Form have form input password', () => {
    expect(component.loginForm.contains('password')).toBeTruthy();
  });
  it(' 🔒 password is required', () => {
    const control = component.loginForm.get('password');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
});
