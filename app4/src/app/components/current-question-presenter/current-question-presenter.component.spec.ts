import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQuestionPresenterComponent } from './current-question-presenter.component';

describe('CurrentQuestionPresenterComponent', () => {
  let component: CurrentQuestionPresenterComponent;
  let fixture: ComponentFixture<CurrentQuestionPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentQuestionPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentQuestionPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
