import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
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
  });

  it('should create, with all imports modules 😅', () => {
    expect(component).toBeTruthy();
  });
});
