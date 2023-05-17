export interface IPlace {
  _id?: string;
  placeName: string;
  description: string;
  owner?: string;
  smells?: string;
  type?: string;
  lighting?: string;
  events?: string;
  images?: string[];
}
