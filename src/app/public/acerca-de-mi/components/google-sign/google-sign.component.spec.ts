import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignComponent } from './google-sign.component';

describe('GoogleSignComponent', () => {
  let component: GoogleSignComponent;
  let fixture: ComponentFixture<GoogleSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
