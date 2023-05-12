import { IRelationship } from "./IRelationship";

export interface ICharacter {
  _id: string;
  name: string;
  description: string;
  images: string[];
  relationships: IRelationship[];
}
