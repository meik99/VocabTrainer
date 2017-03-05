import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVocabsComponent } from './manage-vocabs.component';

describe('ManageVocabsComponent', () => {
  let component: ManageVocabsComponent;
  let fixture: ComponentFixture<ManageVocabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVocabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVocabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
