import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ResponseListComponent } from '../response-list/response-list.component';
import { ResponseCreateComponent } from '../response-create/response-create.component';
import { ResponseDetailComponent } from '../response-detail/response-detail.component';
import { ApprovedresponseListComponent } from '../approvedresponse-list/approvedresponse-list/approvedresponse-list.component';

export const routes: Routes = [
  { path: '', component: ResponseListComponent },
  { path: 'approvedresponse', component: ApprovedresponseListComponent },
  { path: 'create', component: ResponseCreateComponent },
  { path: 'edit/:id', component: ResponseCreateComponent },
  { path: 'detail/:id', component: ResponseDetailComponent }
];

