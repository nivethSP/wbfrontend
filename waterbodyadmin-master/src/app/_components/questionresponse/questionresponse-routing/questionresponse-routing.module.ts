import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { QuestionresponseListComponent } from '../questionresponse-list/questionresponse-list.component';
import { QuestionresponseCreateComponent } from '../questionresponse-create/questionresponse-create.component';
import { QuestionresponseDetailComponent } from '../questionresponse-detail/questionresponse-detail.component';

export const routes: Routes = [
    { path: '', component: QuestionresponseListComponent },
    { path: 'create', component: QuestionresponseCreateComponent },
    { path: 'edit/:id', component: QuestionresponseCreateComponent },
    { path: 'details/:id', component: QuestionresponseDetailComponent }
  ];
  
