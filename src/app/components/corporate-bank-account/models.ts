export interface ICorporateBankAccount {
  accountName: string;
  companyName: string;
  abn: string;
  accNumber: string;
  bsb: string;
  noOfOfficers: number;
}

export class BankAccount implements ICorporateBankAccount {
  accountName: string;
  companyName: string;
  abn: string;
  accNumber: string;
  bsb: string;
  noOfOfficers: number;

  constructor(initData: ICorporateBankAccount = null) {
    if (initData) {
      Object.assign(this, initData);
    } else {
      this.accountName = null;
      this.companyName = null;
      this.abn = null;
      this.accNumber = null;
      this.bsb = null;
      this.noOfOfficers = null;
    }
  }
}