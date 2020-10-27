import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { delay, takeWhile } from 'rxjs/operators';
import { TITLE } from 'src/app/models';

import { IAccountInfo } from './models';

@Component({
  selector: 'app-account-holder-info',
  templateUrl: './account-holder-info.component.html',
  styleUrls: ['./account-holder-info.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccountHolderInfoComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountHolderInfoComponent implements ControlValueAccessor, OnDestroy {

  title = TITLE;
  isAlive = true;

  accInfoForm: FormGroup = this.fb.group({
    title: [null],
    firstName: [null],
    lastName: [null],
    dob: [null]
  });

  constructor(private fb: FormBuilder) { }

  writeValue(value: IAccountInfo): void {
    value && this.accInfoForm.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn): void {
    this.accInfoForm.valueChanges
      .pipe(delay(0), takeWhile(() => this.isAlive))
      .subscribe(fn);
  }

  registerOnTouched(): void {}

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
