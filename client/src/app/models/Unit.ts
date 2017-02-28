import {Vocab} from "./Vocab";
/**
 * Created by michael on 1/20/17.
 */
export class Unit{
  public vocabs: Array<Vocab>;

  constructor(
    public id: number,
    public description: string,
    public trivia: string
  ){

  }
}
