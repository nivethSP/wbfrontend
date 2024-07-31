import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyuploadListComponent } from './waterbodyupload-list/waterbodyupload-list.component';
import { WaterbodyuploadCreateComponent } from './waterbodyupload-create/waterbodyupload-create.component';
import { WaterbodyuploadDetailComponent } from './waterbodyupload-detail/waterbodyupload-detail.component';
import { routes } from './waterbodyupload-routing/waterbodyupload-routing.module'


@NgModule({
  declarations: [
  WaterbodyuploadListComponent,
  WaterbodyuploadCreateComponent,
  WaterbodyuploadDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyUploadModule { }
