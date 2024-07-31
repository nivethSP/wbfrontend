import { JurisdictionDetailComponent } from './../jurisdiction-detail/jurisdiction-detail.component';
import { JurisdictionCreateComponent } from './../jurisdiction-create/jurisdiction-create.component';
import { JurisdictionListComponent } from './../jurisdiction-list/jurisdiction-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: JurisdictionListComponent },
    { path: 'create', component: JurisdictionCreateComponent },
    { path: 'edit/:id', component: JurisdictionCreateComponent },
    { path: 'details/:id', component: JurisdictionDetailComponent }
];
