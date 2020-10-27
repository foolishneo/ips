export interface IOfficer {
  title: string;
  firstName: string;
  lastName: string;
}

export class Officer implements IOfficer {
  title: string;
  firstName: string;
  lastName: string;

  constructor(initData: IOfficer = null) {
    if (initData) {
      Object.assign(this, initData);
    } else {
      this.title = '';
      this.firstName = '';
      this.lastName = '';
      this.lastName = '';
    }
  }
}
