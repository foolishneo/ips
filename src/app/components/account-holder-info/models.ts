export interface IAccountInfo {
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export class AccountInfo implements IAccountInfo {
  title: string;
  firstName: string;
  lastName: string;
  dob: string;

  constructor(initData: IAccountInfo = null) {
    if (initData) {
      Object.assign(this, initData);
    } else {
      this.title = '';
      this.firstName = '';
      this.lastName = '';
      this.lastName = '';
      this.dob = '';
    }
  }
}
