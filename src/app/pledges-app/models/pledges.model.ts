export interface IPledges {

  ApplicantName: string;

  PhoneNumber: string;

  Email: string;

  PledgeAmount: number;

  Currency: ECurrency;

  DonatedAmount: number;
  PledgeType:IPledgeTypes,

}

export interface IDonations {
  ApplicantName:string,
  phoneNumber:string,
  Email:string,
  DonatedAmount:number,
  currency:ECurrency,
  PaidThrough: string,

}
export enum ECurrency {

  USD = 'USD',

  EUR = 'EUR',

  GBP = 'GBP',

  KES = 'KES',

  // Add more currencies as needed

}
export interface IPledgeTypes{
  Name: string;
  StartDate: string;
  EndDate: string;
  Description: string;
}
