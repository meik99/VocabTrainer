import {Schooltype} from "./Schooltype";
/**
 * Created by michael on 1/20/17.
 */
export class Level{
  constructor(
    public id: number,
    public description: string,
    public schooltype: Schooltype
  ){}
}
