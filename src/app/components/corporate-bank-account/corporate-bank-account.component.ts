import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { delay, map, takeWhile, tap } from 'rxjs/operators';
import { Officer } from '../officer/models';
import { ICorporateBankAccount } from './models';

@Component({
  selector: 'app-corporate-bank-account',
  templateUrl: './corporate-bank-account.component.html',
  styleUrls: ['./corporate-bank-account.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CorporateBankAccountComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CorporateBankAccountComponent implements OnInit, ControlValueAccessor, OnDestroy {

  isAlive = true;
  noOfOfficers = [];

  bankAccForm: FormGroup = this.fb.group({
    accountName: [null],
    companyName: [null],
    abn: [null],
    accNumber: [null],
    bsb: [null],
    noOfOfficers: [null],
    officers: this.fb.array([new Officer()]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bankAccForm.get('noOfOfficers').valueChanges
      .pipe(
        tap(data => {
          this.noOfOfficers = Array(data).fill(true);
          this.noOfOfficers.map((item, i) => i > 0 ? this.officers.push(new FormControl(new Officer())) : true);
        }),
        takeWhile(() => this.isAlive)
      ).subscribe();
  }

  writeValue(value: ICorporateBankAccount): void {
    value && this.bankAccForm.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn): void {
    this.bankAccForm.valueChanges
      .pipe(delay(0), takeWhile(() => this.isAlive))
      .subscribe(fn);
  }

  registerOnTouched(): void {}

  get officers(): FormArray {
    return this.bankAccForm.get('officers') as FormArray;
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
