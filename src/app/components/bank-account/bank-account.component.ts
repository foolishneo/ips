import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { delay, takeWhile } from 'rxjs/operators';
import { IBankAccount } from './models';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BankAccountComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BankAccountComponent implements ControlValueAccessor, OnDestroy {

  isAlive = true;

  bankAccForm: FormGroup = this.fb.group({
    accountName: [null],
    holderFirstName: [null],
    holderLastName: [null],
    tfn: [null],
    accNumber: [null],
    bsb: [null],
  });

  constructor(private fb: FormBuilder) { }

  writeValue(value: IBankAccount): void {
    value && this.bankAccForm.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn): void {
    this.bankAccForm.valueChanges
      .pipe(delay(0), takeWhile(() => this.isAlive))
      .subscribe(fn);
  }

  registerOnTouched(): void {}

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
