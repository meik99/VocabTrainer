import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SchooltypeService} from "../../../services/schooltype.service";
import {SchoollevelService} from "../../../services/schoollevel.service";
import {LanguageService} from "../../../services/language.service";
import {UnitService} from "../../../services/unit.service";
import {VocabService} from "../../../services/vocab.service";
import {Schooltype} from "../../../models/Schooltype";
import {Level} from "../../../models/Level";
import {Language} from "../../../models/Language";
import {Unit} from "../../../models/Unit";
import {Vocab} from "../../../models/Vocab";

@Component({
  selector: 'app-manage-vocabs',
  templateUrl: './manage-vocabs.component.html',
  styleUrls: ['./manage-vocabs.component.css']
})
export class ManageVocabsComponent implements OnInit, OnChanges {
  private types: Schooltype[];
  private levels: Level[];
  private languages: Language[];
  private units: Unit[];
  private vocabs: Vocab[];


  private filterType: Schooltype = null;
  private filterLevel: Schooltype = null;
  private filterLanguage: Schooltype = null;
  private filterForeignLanguage: Schooltype = null;
  private filterUnit: Schooltype = null;


  constructor(
    private typeService: SchooltypeService,
    private levelService: SchoollevelService,
    private languageService: LanguageService,
    private unitService: UnitService,
    private vocabService: VocabService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
