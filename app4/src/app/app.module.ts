import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentQuestionPresenterComponent } from './components/current-question-presenter/current-question-presenter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QuizFeatureKey } from './redux/quiz/quiz.state';
import { quizReducer } from './redux/quiz/quiz.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CurrentQuestionPresenterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(QuizFeatureKey, quizReducer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
