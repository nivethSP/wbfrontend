import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from 'src/app/_shared/shared.module';
import { routes } from './questionresponse-routing/questionresponse-routing.module';
import { QuestionresponseListComponent } from './questionresponse-list/questionresponse-list.component';
import { QuestionresponseCreateComponent } from './questionresponse-create/questionresponse-create.component';
import { QuestionresponseDetailComponent } from './questionresponse-detail/questionresponse-detail.component';
import { ParticularsComponent } from '../particulars/particulars/particulars.component';
import { HydrologicalComponent } from '../hydrological/hydrological/hydrological.component';
import { TankQuestionsComponent } from '../waterBodyTypeResponse/tank/questions/tankquestions.component';
import { PondQuestionsComponent } from '../waterBodyTypeResponse/pond/questions/pondquestions.component';
import { OoraniQuestionsComponent } from '../waterBodyTypeResponse/oorani/questions/ooraniquestions.component';
import { TempleTankQuestionsComponent } from '../waterBodyTypeResponse/templetank/questions/templetankquestions.component';
import { IrrigationTankSurveyResponseComponent } from './WaterBodyType/IrrigationTank/irrigation-tank-survey-response/irrigation-tank-survey-response.component';
import { OoraniSurveyResponseComponent } from './WaterBodyType/Oorani/oorani-survey-response/oorani-survey-response.component';
import { PondSurveyResponseComponent } from './WaterBodyType/Pond/pond-survey-response/pond-survey-response.component';
import { TempleTankSurveyResponseComponent } from './WaterBodyType/TempleTank/temple-tank-survey-response/temple-tank-survey-response.component';


@NgModule({
  declarations: [
    QuestionresponseListComponent,
    QuestionresponseCreateComponent,
    QuestionresponseDetailComponent,
    TankQuestionsComponent,
    PondQuestionsComponent,
    OoraniQuestionsComponent,
    TempleTankQuestionsComponent,
    ParticularsComponent,
    HydrologicalComponent,
    IrrigationTankSurveyResponseComponent,
    OoraniSurveyResponseComponent,
    PondSurveyResponseComponent,
    TempleTankSurveyResponseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatListModule,
    MatChipsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionResponseModule { }
