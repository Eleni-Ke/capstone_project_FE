import { IRelationship } from "./IRelationship";

export interface ICharacter {
  _id?: string;
  name: string;
  description: string;
  age?: string;
  appearance?: string;
  strengths?: string;
  weaknesses?: string;
  superPower?: string;
  images?: string[];
  relationships?: IRelationship[];
}
