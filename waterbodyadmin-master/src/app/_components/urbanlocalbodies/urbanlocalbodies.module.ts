import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { UrbanlocalbodiesListComponent } from './urbanlocalbodies-list/urbanlocalbodies-list.component';
import { UrbanlocalbodiesCreateComponent } from './urbanlocalbodies-create/urbanlocalbodies-create.component';
import { UrbanlocalbodiesDetailComponent } from './urbanlocalbodies-detail/urbanlocalbodies-detail.component';
import { routes } from './urbanlocalbodies-routing/urbanlocalbodies-routing.module'

@NgModule({
    declarations: [
        UrbanlocalbodiesListComponent,
        UrbanlocalbodiesCreateComponent,
        UrbanlocalbodiesDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class UrbanlocalbodiesModule { }
