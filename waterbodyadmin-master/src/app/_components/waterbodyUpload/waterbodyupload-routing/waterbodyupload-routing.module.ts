import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyuploadListComponent } from '../waterbodyupload-list/waterbodyupload-list.component';
import { WaterbodyuploadCreateComponent } from '../waterbodyupload-create/waterbodyupload-create.component';
import { WaterbodyuploadDetailComponent } from '../waterbodyupload-detail/waterbodyupload-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyuploadListComponent },
    { path: 'create', component: WaterbodyuploadCreateComponent },
    { path: 'edit/:id', component: WaterbodyuploadCreateComponent },
    { path: 'detail/:id', component: WaterbodyuploadDetailComponent }
  ];
  
