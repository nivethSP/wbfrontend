import { routes } from './../jurisdiction/jurisdiction-routing/jurisdiction-routing.module';
import { JurisdictionDetailComponent } from './jurisdiction-detail/jurisdiction-detail.component';
import { JurisdictionCreateComponent } from './jurisdiction-create/jurisdiction-create.component';
import { JurisdictionListComponent } from './jurisdiction-list/jurisdiction-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
    declarations: [
        JurisdictionListComponent,
        JurisdictionCreateComponent,
        JurisdictionDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class JurisdictionModule { }
