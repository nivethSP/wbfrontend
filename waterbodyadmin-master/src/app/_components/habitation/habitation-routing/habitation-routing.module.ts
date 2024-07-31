import { HabitationDetailComponent } from './../habitation-detail/habitation-detail.component';
import { HabitationCreateComponent } from './../habitation-create/habitation-create.component';
import { HabitationListComponent } from './../habitation-list/habitation-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HabitationListComponent },
    { path: 'create', component: HabitationCreateComponent },
    { path: 'edit/:id', component: HabitationCreateComponent },
    { path: 'details/:id', component: HabitationDetailComponent }
];
