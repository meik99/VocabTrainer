import {Vocab} from "./Vocab";
/**
 * Created by michael on 1/20/17.
 */
export class Unit{
  constructor(
    public id: number,
    public description: string,
    public trivia: string,
    public vocabs: Array<Vocab>
  ){

  }
}
