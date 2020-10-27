import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AccountInfo } from 'src/app/components/account-holder-info/models';

import { Account, AccountType, ACCOUNT_TYPE } from './models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})

export class RegistrationComponent implements OnInit, OnDestroy {

  accounts =  AccountType;
  isPersonal = false;
  isCorporate = false;
  noOfIndividuals = [];
  isAlive = true;

  regoForm: FormGroup = this.fb.group({
    accountType: [null],
    noOfIndividuals: [null],
    accountHolders: this.fb.array([new AccountInfo()])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const accountType$ = this.regoForm.get('accountType').valueChanges;
    const noOfIndividuals$ = this.regoForm.get('noOfIndividuals').valueChanges;
    combineLatest([accountType$, noOfIndividuals$])
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(([accountType, noOfIndividuals]) => {
        this.isPersonal = accountType === ACCOUNT_TYPE.PERSONAL ? true : false;
        this.isCorporate = accountType === ACCOUNT_TYPE.CORPORATE ? true : false;
        this.noOfIndividuals = Array(noOfIndividuals).fill(true);
        this.noOfIndividuals.map((item, i) => i > 0 ? this.accountHolders.push(new FormControl(new AccountInfo())) : true);
      });
  }

  onSubmit(): void {}

  get accountHolders(): FormArray {
    return this.regoForm.get('accountHolders') as FormArray;
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
