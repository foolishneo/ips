export interface IBankAccount {
  accountName: string;
  holderFirstName: string;
  holderLastName: string;
  tfn: string;
  accNumber: string;
  bsb: string;
}

export class BankAccount implements IBankAccount {
  accountName: string;
  holderFirstName: string;
  holderLastName: string;
  tfn: string;
  accNumber: string;
  bsb: string;
  
  constructor(initData: IBankAccount = null) {
    if (initData) {
      Object.assign(this, initData);
    } else {
      this.accountName = null;
      this.holderFirstName = null;
      this.holderLastName = null;
      this.tfn = null;
      this.accNumber = null;
      this.bsb = null;
    }
  }
}