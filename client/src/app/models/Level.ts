import {Schooltype} from "./Schooltype";
import {SchooltypeService} from "../services/schooltype.service";
/**
 * Created by michael on 1/20/17.
 */
export class Level{
  public schooltype: Schooltype;

  constructor(
    public id: number,
    public description: string,
    public schooltype_id: number
  ){
  }
}
