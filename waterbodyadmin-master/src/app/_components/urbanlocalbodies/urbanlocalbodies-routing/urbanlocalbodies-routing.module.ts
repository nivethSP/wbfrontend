import { UrbanlocalbodiesDetailComponent } from './../urbanlocalbodies-detail/urbanlocalbodies-detail.component';
import { UrbanlocalbodiesCreateComponent } from './../urbanlocalbodies-create/urbanlocalbodies-create.component';
import { UrbanlocalbodiesListComponent } from './../urbanlocalbodies-list/urbanlocalbodies-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: UrbanlocalbodiesListComponent },
    { path: 'create', component: UrbanlocalbodiesCreateComponent },
    { path: 'edit/:id', component: UrbanlocalbodiesCreateComponent },
    { path: 'details/:id', component: UrbanlocalbodiesDetailComponent }
];

