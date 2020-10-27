import { AccountInfo } from 'src/app/components/account-holder-info/models';
import { IType } from 'src/app/models';

export interface IAccount {
  accountType: string;
  noOfIndividuals: number;
  accountHolder: AccountInfo[];
}

export class Account implements IAccount {
  accountType: string;
  noOfIndividuals: number;
  accountHolder: AccountInfo[];

  constructor(account: IAccount = null) {
    if (account) {
      Object.assign(this, account);
    } else {
      this.accountType = '';
      this.noOfIndividuals = 0;
      this.accountHolder = [new AccountInfo()];
    }
  }
}

export enum ACCOUNT_TYPE {
  PERSONAL = 'Personal',
  CORPORATE = 'Corporate'
}

export const AccountType: IType[] = [
  {
    value: ACCOUNT_TYPE.PERSONAL,
    viewValue: ACCOUNT_TYPE.PERSONAL
  },
  {
    value: ACCOUNT_TYPE.CORPORATE,
    viewValue: ACCOUNT_TYPE.CORPORATE
  }
]
