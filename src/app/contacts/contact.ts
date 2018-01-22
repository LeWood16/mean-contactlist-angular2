export class Contact {
  _id?: string;
  name: string;
  address: {
    lineOne: string;
    lineTwo: string;
    city: string;
    state: string;
    zipcode: string;
  }
  email: string;
  phone: {
    mobile: string;
    work: string;
  }
}