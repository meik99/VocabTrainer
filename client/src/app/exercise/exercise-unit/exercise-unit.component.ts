import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Unit} from "../../models/Unit";
import {Language} from "../../models/Language";
import {Vocab} from "../../models/Vocab";
import {VocabService} from "../../services/vocab.service";

@Component({
  selector: 'app-exercise-unit',
  templateUrl: 'exercise-unit.component.html',
  styleUrls: ['exercise-unit.component.css']
})
export class ExerciseUnitComponent implements OnInit, OnChanges {

  @Input()
  unit: Unit;
  @Input()
  inputLanguage: Language;
  @Input()
  outputLanguage: Language;

  private vocabs: Vocab[];

  constructor(
    private vocabService: VocabService
  ) { }

  ngOnInit() {
    this.updateVocabs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateVocabs();
  }

  updateVocabs(): void{
    this.vocabService.findVocabsByUnit(this.unit)
      .then(result => {
        this.vocabs = result;
        console.log(this.vocabs);
        this.vocabService.populateVocabs(this.vocabs)
          .then(result => {
            this.vocabs = result;
            console.log(this.vocabs);
          });
      });
  }
}
