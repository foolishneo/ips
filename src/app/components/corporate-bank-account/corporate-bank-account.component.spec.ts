import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBankAccountComponent } from './corporate-bank-account.component';

describe('CorporateBankAccountComponent', () => {
  let component: CorporateBankAccountComponent;
  let fixture: ComponentFixture<CorporateBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
