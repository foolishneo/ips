import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { delay, takeWhile } from 'rxjs/operators';
import { TITLE } from 'src/app/models';
import { IOfficer } from './models';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OfficerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficerComponent implements ControlValueAccessor, OnDestroy {

  title = TITLE;
  isAlive = true;

  officerForm: FormGroup = this.fb.group({
    title: [null],
    firstName: [null],
    lastName: [null]
  });

  constructor(private fb: FormBuilder) { }

  writeValue(value: IOfficer): void {
    value && this.officerForm.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn): void {
    this.officerForm.valueChanges
      .pipe(delay(0), takeWhile(() => this.isAlive))
      .subscribe(fn);
  }

  registerOnTouched(): void {}

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
