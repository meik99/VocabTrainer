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
    private schooltype_id: number,
    private schooltypeService: SchooltypeService
  ){
    schooltypeService.findSchooltypeById(this.schooltype_id)
      .then(schooltype => this.schooltype = schooltype);
  }
}
